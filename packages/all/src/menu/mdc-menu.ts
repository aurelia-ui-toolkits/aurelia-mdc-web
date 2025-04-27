import { MdcComponent, booleanAttr, number } from '@aurelia-mdc-web/base';
import { MDCMenuFoundation, DefaultFocusState, MDCMenuAdapter, Corner, MDCMenuItemComponentEventDetail, strings, cssClasses } from '@material/menu';
import { MdcMenuSurface } from '@aurelia-mdc-web/menu-surface';
import { MdcList, IMdcListActionEvent, MdcListItem } from '@aurelia-mdc-web/list';
import { MDCListIndex } from '@material/list';
import { MDCMenuDistance } from '@material/menu-surface';
import { numbers as listConstants } from '@material/list/constants';
import { closest } from '@material/dom/ponyfill';
import { inject, customElement, bindable, BindingMode } from 'aurelia';
import { CustomElement } from '@aurelia/runtime-html';
import template from './mdc-menu.html?raw';

strings.SELECTED_EVENT = strings.SELECTED_EVENT.toLowerCase();

/**
 * @selector mdc-menu
 * @emits mdcmenu:selected | Indicates that a menu item has been selected
 */
@inject(Element)
@customElement({ name: 'mdc-menu', template })
export class MdcMenu extends MdcComponent<MDCMenuFoundation> {
  menuSurface: MdcMenuSurface; // assigned in html

  // TODO: can we use child here?
  // @child('mdc-list')
  get list_(): MdcList | undefined {
    const el = this.root.querySelector('mdc-list,mdc-deprecated-list');
    return el ? CustomElement.for<MdcList>(el).viewModel : undefined;
  }

  /** Used to indicate that the menu is using fixed positioning */
  @bindable({ set: booleanAttr })
  fixed: boolean;

  @bindable({ set: booleanAttr })
  typeahead?: boolean;
  typeaheadChanged() {
    if (this.list_ && this.typeahead !== undefined) {
      setTimeout(() => { this.list_!.typeahead = this.typeahead!; }, 0);
    }
  }

  /** Makes the menu element direct child of the body */
  @bindable({ set: booleanAttr, mode: BindingMode.oneTime })
  hoistToBody: boolean;

  /** Set to indicate an element the menu should be anchored to */
  @bindable()
  anchor?: Element | null;

  /** Sets default focus state where the menu should focus every time when menu is opened. Focuses the list root ('list') element by default. */
  @bindable()
  defaultFocusState: keyof typeof DefaultFocusState = 'LIST_ROOT';
  defaultFocusStateChanged() {
    this.foundation?.setDefaultFocusState(DefaultFocusState[this.defaultFocusState]);
  }

  /** Override the opening point of the menu. (Default: TOP_START) */
  @bindable()
  anchorCorner: keyof typeof Corner;

  /** Sets the distance from the anchor point that the menu surface should be shown */
  @bindable()
  anchorMargin: Partial<MDCMenuDistance>;

  /** Sets whether the menu should open and close without animation when the open/close methods are called */
  @bindable({ set: booleanAttr })
  quickOpen: boolean;

  /** Sets whether the menu surface should stay open after item selection */
  @bindable({ set: booleanAttr })
  stayOpenOnSelection: boolean;

  @bindable()
  maxHeight: number;

  @bindable({ set: number })
  openBottomBias: number;

  /** Sets whether focus should be restored after the menu is closed */
  @bindable({ set: booleanAttr })
  skipRestoreFocus: boolean;
  skipRestoreFocusChanged() {
    if (this.skipRestoreFocus) {
      this.root.setAttribute('data-menu-item-skip-restore-focus', 'true');
    } else {
      this.root.removeAttribute('data-menu-item-skip-restore-focus');
    }
  }

  @bindable({ set: booleanAttr })
  selectOnTab: boolean;

  @bindable({ set: booleanAttr })
  stayOpen: boolean;

  handleKeydown_(evt: KeyboardEvent) {
    const focusedItemIndex = this.list_?.foundation?.getFocusedItemIndex() ?? listConstants.UNSET_INDEX;
    if (this.selectOnTab && (evt.key === 'Tab' || evt.keyCode === 9)
      && focusedItemIndex !== listConstants.UNSET_INDEX) {
      this.foundation?.handleItemAction(this.items[focusedItemIndex]);
    } else {
      this.foundation?.handleKeydown(evt);
    }
    return true;
  }

  handleItemAction_(evt: IMdcListActionEvent) {
    this.foundation?.handleItemAction(this.items[evt.detail.index]);
    return true;
  }

  handleMenuSurfaceOpened_() {
    this.foundation?.handleMenuSurfaceOpened();
    return true;
  }

  get open(): boolean {
    return this.menuSurface.open;
  }

  set open(value: boolean) {
    this.menuSurface.open = value;
  }

  /** Toggles the menu to open or close */
  toggle() {
    this.open = !this.open;
  }

  openAnchored(anchor: HTMLElement) {
    this.anchor = anchor;
    this.open = true;
  }

  get wrapFocus(): boolean {
    return this.list_ ? this.list_.wrapFocus : false;
  }

  set wrapFocus(value: boolean) {
    if (this.list_) {
      this.list_.wrapFocus = value;
    }
  }

  /**
   * @return Whether typeahead logic is currently matching some user prefix.
   */
  get typeaheadInProgress() {
    return this.list_ ? this.list_.typeaheadInProgress : false;
  }

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   */
  get items(): Element[] {
    return this.list_ ? this.list_.listElements : [];
  }

  /**
   * Retrieves the selected index. Only applicable to select menus.
   * @return The selected index, which is a number for single selection and
   *     radio lists, and an array of numbers for checkbox lists.
   */
  get selectedIndex(): MDCListIndex {
    return this.list_ ? this.list_.selectedIndex : listConstants.UNSET_INDEX;
  }

  /**
   * Sets the selected index of the list. Only applicable to select menus.
   * @param index The selected index, which is a number for single selection and
   *     radio lists, and an array of numbers for checkbox lists.
   */
  set selectedIndex(index: MDCListIndex) {
    if (this.list_) {
      this.list_.selectedIndex = index;
    }
  }

  attaching() {
    if (this.defaultFocusState !== undefined) {
      this.defaultFocusStateChanged();
    }
    if (this.hoistToBody) {
      // when menu is a direct body child there may be a vertical scrollbar briefly shown
      // when MDCMenuSurfaceFoundation.cssClasses.OPEN added to the menu surface
      // which breaks alignment
      this.root.style.position = 'fixed';
    }
  }

  initialSyncWithDOM() {
    this.typeaheadChanged();
  }

  /**
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Only relevant
   *     when starting a new match sequence. To start a new match sequence,
   *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
   *     to clear after a set interval defined in list foundation. Defaults to
   *     the currently focused index.
   * @return The index of the matched item, or -1 if no match.
   */
  typeaheadMatchItem(nextChar: string, startingIndex?: number): number {
    if (this.list_) {
      return this.list_.typeaheadMatchItem(nextChar, startingIndex);
    }
    return -1;
  }

  /**
   * Layout the underlying list element in the case of any dynamic updates
   * to its structure.
   */
  layout() {
    if (this.list_) {
      this.list_.layout();
    }
  }

  /**
   * @param corner Default anchor corner alignment of top-left menu corner.
   */
  setAnchorCorner(corner: Corner) {
    this.menuSurface.setAnchorCorner(corner);
  }

  /**
   * Sets the list item as the selected row at the specified index.
   * @param index Index of list item within menu.
   */
  setSelectedIndex(index: number) {
    this.foundation?.setSelectedIndex(index);
  }

  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */
  setEnabled(index: number, isEnabled: boolean): void {
    this.foundation?.setEnabled(index, isEnabled);
  }

  /**
   * @return The item within the menu at the index specified.
   */
  getOptionByIndex(index: number): Element | null {
    const items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  }

  /**
   * @param index A menu item's index.
   * @return The primary text within the menu at the index specified.
   */
  getPrimaryTextAtIndex(index: number): string {
    const item = this.getOptionByIndex(index);
    if (item && this.list_) {
      return this.list_.getPrimaryText(item) || '';
    }
    return '';
  }

  setAbsolutePosition(x: number, y: number) {
    this.menuSurface.setAbsolutePosition(x, y);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCMenuAdapter = {
      addClassToElementAtIndex: (index, className) => {
        const list = this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        const list = this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const list = this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const list = this.items;
        list[index].removeAttribute(attr);
      },
      getAttributeFromElementAtIndex: (index, attr) => {
        const list = this.items;
        return list[index].getAttribute(attr);
      },
      elementContainsClass: (element, className) => element.classList.contains(className),
      closeSurface: (skipRestoreFocus: boolean) => {
        if (!this.stayOpenOnSelection) {
          this.menuSurface?.close(skipRestoreFocus);
        }
      },
      getElementIndex: (element) => this.items.indexOf(element),
      notifySelected: (evtData) => {
        const item = this.items[evtData.index];
        this.emit<IMdcMenuItemComponentEventDetail>(strings.SELECTED_EVENT,
          { index: evtData.index, item, data: CustomElement.for<MdcListItem>(item).viewModel.value });
      },
      getMenuItemCount: () => this.items.length,
      focusItemAtIndex: (index) => (this.items[index] as HTMLElement).focus(),
      focusListRoot: () => (this.root.querySelector(strings.LIST_SELECTOR) as HTMLElement).focus(),
      isSelectableItemAtIndex: (index) => !!closest(this.items[index], `.${cssClasses.MENU_SELECTION_GROUP}`),
      getSelectedSiblingOfItemAtIndex: (index) => {
        const selectionGroupEl = closest(this.items[index], `.${cssClasses.MENU_SELECTION_GROUP}`) as HTMLElement;
        const selectedItemEl = selectionGroupEl.querySelector(`.${cssClasses.MENU_SELECTED_LIST_ITEM}`);
        return selectedItemEl ? this.items.indexOf(selectedItemEl) : -1;
      },
    };
    return new MDCMenuFoundation(adapter);
  }

}

export interface IMdcMenuItemComponentEventDetail extends MDCMenuItemComponentEventDetail {
  data: unknown;
}

/** @hidden */
export interface IMdcMenuItemComponentEvent extends Event {
  readonly detail: IMdcMenuItemComponentEventDetail;
}
