import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCListFoundation, MDCListAdapter, strings, cssClasses, MDCListIndex } from '@material/list';
import { inject, useView, customElement, children } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { closest, matches } from '@material/dom/ponyfill';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcListItem, IMdcListItemElement, IMdcListActionEventDetail } from './mdc-list-item/mdc-list-item';

strings.ACTION_EVENT = strings.ACTION_EVENT.toLowerCase();

export const mdcListStrings = {
  ITEMS_CHANGED: 'mdclist:itemschanged'
};

/**
 * @selector mdc-list
 * @emits mdclist:action | Indicates that a list item with the specified index has been activated
 * @emits mdclist:itemschanged | Indicates that the list of items has changed
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-list.html'))
@customElement(cssClasses.ROOT)
export class MdcList extends MdcComponent<MDCListFoundation>{

  cssClasses = cssClasses;

  /** Increases the height of the row to give it greater visual separation from adjacent rows */
  @bindable.booleanAttr
  twoLine: boolean;

  /** When enabled, the space and enter keys (or click event) will trigger an single list item to become selected and any other previous selected element to become deselected */
  @bindable.booleanAttr
  singleSelection: boolean;
  async singleSelectionChanged() {
    await this.initialised;
    this.foundation?.setSingleSelection(this.singleSelection);
  }

  /** Sets the selection logic to apply/remove the mdc-list-item--activated class */
  @bindable.booleanAttr
  activated: boolean;
  async activatedChanged() {
    await this.initialised;
    this.foundation?.setUseActivatedClass(this.activated);
  }

  /** Sets the list to an orientation causing the keys used for navigation to change. true results in the Up/Down arrow keys being used. If false, the Left/Right arrow keys are used. */
  @bindable.booleanAttr
  vertical: boolean = true;

  /** Increases the density of the list, making it appear more compact */
  @bindable.booleanAttr
  dense: boolean;

  /** Optional, configures lists that start with text */
  @bindable.booleanAttr
  textual: boolean;

  /** Configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. */
  @bindable.booleanAttr
  avatar: boolean;

  /** Optional, configures the leading tile of each row to display icons */
  @bindable.booleanAttr
  icon: boolean;

  /** Optional, configures the leading tile of each row to display images */
  @bindable.booleanAttr
  image: boolean;

  /** Optional, configures the leading tile of each row to display smaller images (this is analogous to an avatar list but the image will	not be rounded) */
  @bindable.booleanAttr
  thumbnail: boolean;

  /** Optional, configures the leading tile of each row to display videos */
  @bindable.booleanAttr
  video: boolean;

  @children('mdc-list-item')
  items: MdcListItem[];
  itemsChanged() {
    this.emit(mdcListStrings.ITEMS_CHANGED, { items: this.items }, true);
  }

  @bindable.booleanAttr
  typeahead: boolean;
  async typeaheadChanged(hasTypeahead: boolean) {
    await this.initialised;
    this.foundation?.setHasTypeahead(hasTypeahead);
  }

  /** Prevent list items receive styles for hover, focus, and press states (including the ripple) */
  @bindable.booleanAttr
  nonInteractive: boolean;

  /** Sets the list to allow the up arrow on the first element to focus the last element of the list and vice versa */
  @bindable.booleanAttr
  wrapFocus: boolean;
  async wrapFocusChanged() {
    await this.initialised;
    this.foundation?.setWrapFocus(this.wrapFocus);
  }

  initialSyncWithDOM() {
    this.layout();
    this.initializeListType();
  }

  get listElements(): Element[] {
    return [].slice.call(this.root.querySelectorAll(`.${cssClasses.LIST_ITEM_CLASS}`)) as Element[];
  }

  /**
   * Extracts the primary text from a list item.
   * @param item The list item element.
   * @return The primary text in the element.
   */
  getPrimaryText(item: Element): string {
    const primaryText = item.querySelector(`.${cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS}`);
    if (primaryText) {
      return primaryText.textContent ?? '';
    }

    const singleLineText = item.querySelector(`.${cssClasses.LIST_ITEM_TEXT_CLASS}`);
    return singleLineText?.textContent ?? '';
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCListAdapter = {
      addClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: (index) => {
        const element = this.listElements[index] as HTMLElement | undefined;
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: (index, attr) => this.listElements[index].getAttribute(attr),
      getFocusedElementIndex: () => this.listElements.indexOf(document.activeElement!),
      getListItemCount: () => this.listElements.length,
      getPrimaryTextAtIndex: (index) => this.getPrimaryText(this.listElements[index]),
      hasCheckboxAtIndex: (index) => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: (index) => {
        const listItem = this.listElements[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: (index) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector<HTMLInputElement>(strings.CHECKBOX_SELECTOR);
        return toggleEl!.checked;
      },
      isFocusInsideList: () => {
        return this.root !== document.activeElement && this.root.contains(document.activeElement);
      },
      isRootFocused: () => document.activeElement === this.root,
      listItemAtIndexHasClass: (index, className) => this.listElements[index].classList.contains(className),
      notifyAction: (index) => {
        const listItem = this.listElements[index];
        if (!listItem.hasAttribute('no-list-action')) {
          const data = (listItem as IMdcListItemElement).au.controller.viewModel.value;
          this.emit<IMdcListActionEventDetail>(strings.ACTION_EVENT, { index, data }, /** shouldBubble */ true);
        }
      },
      removeClassForElementIndex: (index, className) => {
        const element = this.listElements[index];
        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: (index, attr, value) => {
        const element = this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = this.listElements[index];
        const toggleEl = listItem.querySelector<HTMLInputElement>(strings.CHECKBOX_RADIO_SELECTOR);
        if (toggleEl?.disabled) {
          return;
        }
        toggleEl!.checked = isChecked;

        const event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl!.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const element = this.listElements[listItemIndex];
        const listItemChildren: Element[] =
          [].slice.call(element.querySelectorAll(strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach((el) => el.setAttribute('tabindex', tabIndexValue));
      },
    };
    return new MDCListFoundation(adapter);
  }

  /**
   * @hidden
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */
  private getListItemIndex_(evt: Event) {
    const eventTarget = evt.target as Element;
    const nearestParent = closest(eventTarget, `.${cssClasses.LIST_ITEM_CLASS}, .${cssClasses.ROOT}`);

    // Get the index of the element if it is a list item.
    if (nearestParent && matches(nearestParent, `.${cssClasses.LIST_ITEM_CLASS}`)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  }

  /**
   * @hidden
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  handleFocusInEvent_(evt: FocusEvent) {
    const index = this.getListItemIndex_(evt);
    this.foundation?.handleFocusIn(evt, index);
  }

  /**
   * @hidden
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  handleFocusOutEvent_(evt: FocusEvent) {
    const index = this.getListItemIndex_(evt);
    this.foundation?.handleFocusOut(evt, index);
  }

  /**
   * @hidden
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */
  handleKeydownEvent_(evt: KeyboardEvent) {
    const index = this.getListItemIndex_(evt);
    const target = evt.target as Element;
    if (!target.hasAttribute('not-selectable')) {
      this.foundation?.handleKeydown(evt, target.classList.contains(cssClasses.LIST_ITEM_CLASS), index);
    }
    return true;
  }

  /**
   * @hidden
   * Used to figure out which element was clicked before sending the event to the foundation.
   */
  handleClickEvent_(evt: MouseEvent) {
    const index = this.getListItemIndex_(evt);
    const target = evt.target as Element;
    // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
    const toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
    this.foundation?.handleClick(index, toggleCheckbox);
    return true;
  }

  /**
   * @hidden
   * @return Whether typeahead is currently matching a user-specified prefix.
   */
  get typeaheadInProgress(): boolean {
    return this.foundation!.isTypeaheadInProgress();
  }

  /**
   * @hidden
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Defaults to
   *     the currently focused index.
   * @return The index of the matched item.
   */
  typeaheadMatchItem(nextChar: string, startingIndex?: number): number {
    return this.foundation!.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */ true);
  }

  layout() {
    const direction = this.root.getAttribute(strings.ARIA_ORIENTATION);
    this.vertical = direction !== strings.ARIA_ORIENTATION_HORIZONTAL;

    // List items need to have at least tabindex=-1 to be focusable.
    [].slice.call(this.root.querySelectorAll('.mdc-list-item:not([tabindex])'))
      .forEach((el: Element) => {
        el.setAttribute('tabindex', '-1');
      });

    // Child button/a elements are not tabbable until the list item is focused.
    [].slice.call(this.root.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS))
      .forEach((el: Element) => el.setAttribute('tabindex', '-1'));

    this.foundation?.layout();
  }

  get selectedIndex(): MDCListIndex {
    return this.foundation!.getSelectedIndex();
  }

  set selectedIndex(index: MDCListIndex) {
    this.foundation?.setSelectedIndex(index);
  }

  /**
   * @hidden
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */
  initializeListType() {
    const checkboxListItems = this.root.querySelectorAll(strings.ARIA_ROLE_CHECKBOX_SELECTOR);
    const radioSelectedListItem = this.root.querySelector(strings.ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      const preselectedItems = this.root.querySelectorAll(strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, (listItem: Element) => this.listElements.indexOf(listItem)) as number[];
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  }
}

/** @hidden */
export interface IMdcListElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcList;
    };
  };
}

