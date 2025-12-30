import { MdcComponent, IValidatedElement, IError, booleanAttr } from '../base';
import { cssClasses, MDCSelectFoundationMap, MDCSelectEventDetail, strings } from '@material/select';
import { inject, customElement, INode, IPlatform, bindable, queueTask } from 'aurelia';
import { MdcSelectIcon, IMdcSelectIconElement, mdcIconStrings } from './mdc-select-icon';
import { MdcSelectHelperText, mdcHelperTextCssClasses } from './mdc-select-helper-text/mdc-select-helper-text';
import { MDCNotchedOutline } from '@material/notched-outline';
import { MDCMenuItemEvent, Corner } from '@material/menu';
import { MDCSelectFoundationAurelia } from './mdc-select-foundation-aurelia';
import { MDCSelectAdapterAurelia } from './mdc-select-adapter-aurelia';
import { MDCMenuDistance } from '@material/menu-surface';
import { processContent, BindingMode, CustomElement, CustomAttribute } from '@aurelia/runtime-html';
import template from './mdc-select.html?raw';
import { MdcFloatingLabel } from '../floating-label/mdc-floating-label';
import { MdcLineRipple } from '../line-ripple/mdc-line-ripple';
import { MdcListItem } from '../list/mdc-list-item/mdc-list-item';
import { MdcMenu } from '../menu/mdc-menu';
import { MdcConfiguration } from '../mdc-configuration';

strings.CHANGE_EVENT = strings.CHANGE_EVENT.toLowerCase();

let selectId = 0;

/**
 * @selector mdc-select
 * @emits mdcselect:change | Emitted if user changed the value
 */
@inject(Element, IPlatform, MdcConfiguration)
@customElement({ name: 'mdc-select', template })
@processContent(function processContent(node: INode, platform: IPlatform) {
  const el = node as Element;

  const leadingIcon = el.querySelector(`[${mdcIconStrings.ATTRIBUTE}]`);
  leadingIcon?.remove();

  const template = platform.document.createElement('template');
  template.setAttribute('au-slot', '');
  template.innerHTML = el.innerHTML;
  el.innerHTML = '';
  el.appendChild(template);

  // move icon to the slot - this allows omitting slot specification
  if (leadingIcon) {
    const div = platform.document.createElement('div');
    div.appendChild(leadingIcon);
    const iconTemplate = platform.document.createElement('template');
    iconTemplate.setAttribute('au-slot', 'leading-icon');
    iconTemplate.innerHTML = div.innerHTML;
    el.appendChild(iconTemplate);
  }
}
)
export class MdcSelect extends MdcComponent<MDCSelectFoundationAurelia> {
  constructor(root: HTMLElement, private configuration: MdcConfiguration) {
    super(root);
    this.outlined = this.configuration.select.outlined;
    defineMdcSelectElementApis(this.root);
    this.root.id = this.id;
  }

  id: string = `mdc-select-${++selectId}`;
  public menu: MdcMenu;
  private selectAnchor: HTMLElement;
  private selectedText: HTMLElement;

  private menuElement?: Element;

  get items(): MdcListItem[] | undefined {
    return this.menu.list_?.items;
  }

  private leadingIcon?: MdcSelectIcon;

  private helperText?: MdcSelectHelperText;
  private lineRipple?: MdcLineRipple;
  private mdcLabel: MdcFloatingLabel;
  private outline?: MDCNotchedOutline;
  errors = new Map<IError, boolean>();

  /** Sets the select label */
  @bindable()
  label: string;
  labelChanged() {
    queueTask(() => this.foundation?.layout());
  }

  /** Styles the select as an outlined select */
  @bindable({ set: booleanAttr })
  outlined?: boolean;
  outlinedChanged() {
    queueTask(() => this.foundation?.layout());
  }

  /** Makes the value required */
  @bindable({ set: booleanAttr })
  required: boolean;
  requiredChanged() {
    if (this.required) {
      this.selectAnchor?.setAttribute('aria-required', 'true');
    } else {
      this.selectAnchor?.removeAttribute('aria-required');
    }
    this.foundation?.setRequired(this.required ?? false);
    queueTask(() => this.foundation?.layout());
  }

  /** Enables/disables the select */
  @bindable({ set: booleanAttr })
  disabled?: boolean;
  disabledChanged() {
    if (this.disabled !== undefined) {
      this.foundation?.setDisabled(this.disabled);
    }
  }

  /** Hoists the select DOM to document.body */
  @bindable({ set: booleanAttr, mode: BindingMode.oneTime })
  hoistToBody: boolean;

  /** Sets the select DOM position to fixed */
  @bindable({ set: booleanAttr, mode: BindingMode.oneTime })
  fixed: boolean;

  /** Sets the margin between the select input and the dropdown */
  @bindable()
  anchorMargin: Partial<MDCMenuDistance>;

  /** Sets the select dropdown width to match content */
  @bindable({ set: booleanAttr })
  naturalWidth: boolean;

  private _value: unknown;
  get value(): unknown {
    if (this.foundation) {
      return this.foundation.getValue();
    } else {
      return this._value;
    }
  }

  set value(value: unknown) {
    this.setValue(value);
  }

  setValue(value: unknown, skipNotify: boolean = false) {
    this._value = value;
    if (this.foundation) {
      this.foundation.setValue(value, skipNotify);
      this.foundation.layout();
    }
  }

  get valid(): boolean {
    return this.foundation?.isValid() ?? true;
  }

  set valid(value: boolean) {
    this.foundation?.setValid(value);
  }

  get selectedIndex(): number {
    return this.foundation!.getSelectedIndex();
  }

  set selectedIndex(selectedIndex: number) {
    this.foundation?.setSelectedIndex(selectedIndex, /** closeMenu */ true);
  }

  addError(error: IError) {
    this.errors.set(error, true);
    this.valid = false;
  }

  removeError(error: IError) {
    this.errors.delete(error);
    this.valid = this.errors.size === 0;
  }

  renderErrors() {
    if (this.helperText) {
      this.helperText.errors = Array.from(this.errors.keys()).filter(x => x.message !== null).map(x => x.message!);
    }
  }

  async attaching() {
    const nextSibling = this.root.nextElementSibling;
    if (nextSibling?.tagName === mdcHelperTextCssClasses.ROOT.toUpperCase()) {
      this.helperText = CustomElement.for<MdcSelectHelperText>(nextSibling).viewModel;
      await this.helperText.initialised;
    }
  }

  beforeFoundationCreated() {
    const leadingIconEl = this.root.querySelector<IMdcSelectIconElement>(`${strings.LEADING_ICON_SELECTOR}`);
    if (leadingIconEl) {
      this.leadingIcon = CustomAttribute.for<MdcSelectIcon>(leadingIconEl, mdcIconStrings.ATTRIBUTE)?.viewModel;
    }
    this.menu.list_!.singleSelection = true;
  }

  initialSyncWithDOM() {
    // set initial value without emitting change events
    this.foundation?.setValue(this._value, true);
    this.foundation?.layout();
    this.errors = new Map<IError, boolean>();
    this.valid = true;

    this.labelChanged();
    this.disabledChanged();
    this.outlinedChanged();
    this.requiredChanged();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSelectAdapterAurelia = {
      ...this.getSelectAdapterMethods(),
      ...this.getCommonAdapterMethods(),
      ...this.getOutlineAdapterMethods(),
      ...this.getLabelAdapterMethods(),
    };
    return new MDCSelectFoundationAurelia(adapter, this.getFoundationMap());
  }

  private getSelectAdapterMethods() {
    return {
      setSelectedText: (text: string) => {
        this.selectedText.textContent = text;
      },
      isSelectAnchorFocused: () => document.activeElement === this.selectAnchor,
      getSelectAnchorAttr: (attr: string) => this.selectAnchor.getAttribute(attr),
      setSelectAnchorAttr: (attr: string, value: string) => {
        this.selectAnchor.setAttribute(attr, value);
      },
      removeSelectAnchorAttr: (attr: string) => {
        this.selectAnchor.removeAttribute(attr);
      },
      addMenuClass: (className: string) => {
        this.menuElement?.classList.add(className);
      },
      removeMenuClass: (className: string) => {
        this.menuElement?.classList.remove(className);
      },
      openMenu: () => {
        this.menu.open = true;
        this.menu.root.style.minWidth = this.menu.root.style.maxWidth = (this.hoistToBody || this.fixed) && !this.naturalWidth
          ? `${this.root.clientWidth}px`
          : '';
      },
      closeMenu: () => { this.menu.open = false; },
      getAnchorElement: () => this.root.querySelector(strings.SELECT_ANCHOR_SELECTOR)!,
      setMenuAnchorElement: (anchorEl: HTMLElement) => {
        this.menu.anchor = anchorEl;
      },
      setMenuAnchorCorner: (anchorCorner: Corner) => {
        this.menu.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: (wrapFocus: boolean) => {
        this.menu.wrapFocus = wrapFocus;
      },
      getSelectedIndex: () => {
        const index = this.menu.selectedIndex;
        return index instanceof Array ? index[0] : index;
      },
      setSelectedIndex: (index: number) => {
        this.menu.selectedIndex = index;
      },
      removeAttributeAtIndex: (index: number, attributeName: string) => {
        this.menu.items[index].removeAttribute(attributeName);
      },
      focusMenuItemAtIndex: (index: number) => {
        (this.menu.items[index] as HTMLElement).focus();
      },
      getMenuItemCount: () => this.menu.items.length,
      getMenuItemValues: () => this.menu.items.map(x => CustomElement.for<MdcListItem>(x).viewModel.value),
      getMenuItemTextAtIndex: (index: number) => this.menu.getPrimaryTextAtIndex(index),
      isTypeaheadInProgress: () => this.menu.typeaheadInProgress,
      typeaheadMatchItem: (nextChar: string, startingIndex: number) => this.menu.typeaheadMatchItem(nextChar, startingIndex),
    };
  }

  private getCommonAdapterMethods() {
    return {
      addClass: (className: string) => {
        this.root.classList.add(className);
      },
      removeClass: (className: string) => {
        this.root.classList.remove(className);
      },
      hasClass: (className: string) => this.root.classList.contains(className),
      setRippleCenter: (normalizedX: number) => this.lineRipple?.setRippleCenter(normalizedX),
      activateBottomLine: () => this.lineRipple?.activate(),
      deactivateBottomLine: () => this.lineRipple?.deactivate(),
      notifyChange: (value: string) => {
        const index = this.selectedIndex;
        this.emit<MDCSelectEventDetail>(strings.CHANGE_EVENT, { value, index }, true /* shouldBubble  */);
        this.emit<MDCSelectEventDetail>('change', { value, index }, true /* shouldBubble  */);
      },
    };
  }

  private getOutlineAdapterMethods() {
    return {
      hasOutline: () => Boolean(this.outline),
      notchOutline: (labelWidth: number) => this.outline?.notch(labelWidth),
      closeOutline: () => this.outline?.closeNotch(),
    };
  }

  private getLabelAdapterMethods() {
    return {
      hasLabel: () => !!this.mdcLabel,
      floatLabel: (shouldFloat: boolean) => this.mdcLabel?.float(shouldFloat),
      getLabelWidth: () => this.mdcLabel ? this.mdcLabel.getWidth() : 0,
      setLabelRequired: (isRequired: boolean) => this.mdcLabel?.setRequired(isRequired),
    };
  }

  handleChange() {
    this.foundation?.handleChange();
    this.emit('change', {}, true);
  }

  handleFocus() {
    this.foundation?.handleFocus();
  }

  handleBlur() {
    this.foundation?.handleBlur();
    // if class is set it means the menu is open,
    // do not emit blur since "conceptually" the element is still active
    if (!this.root.classList.contains(cssClasses.FOCUSED)) {
      this.emit('blur', {}, true);
    }
  }

  handleClick(evt: MouseEvent) {
    this.selectAnchor.focus();
    this.foundation?.handleClick(this.getNormalizedXCoordinate(evt));
  }

  handleKeydown(evt: KeyboardEvent) {
    this.foundation?.handleKeydown(evt);
    return true;
  }

  handleMenuItemAction(evt: MDCMenuItemEvent) {
    this.foundation?.handleMenuItemAction(evt.detail.index);
  }

  handleMenuOpened() {
    this.foundation?.handleMenuOpened();
  }

  handleMenuClosed() {
    this.foundation?.handleMenuClosed();
    if (!this.root.classList.contains(cssClasses.FOCUSED)) {
      this.emit('blur', {}, true);
    }
  }

  handleItemsChanged() {
    this.foundation?.layoutOptions();
    this.foundation?.layout();
  }

  focus() {
    this.selectAnchor.focus();
  }

  blur() {
    this.selectAnchor.blur();
  }

  /**
   * @hidden
   * Calculates where the line ripple should start based on the x coordinate within the component.
   */
  private getNormalizedXCoordinate(evt: MouseEvent | TouchEvent): number {
    const targetClientRect = (evt.target as Element).getBoundingClientRect();
    const xCoordinate =
      this.isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  }

  private isTouchEvent(evt: MouseEvent | TouchEvent): evt is TouchEvent {
    return Boolean((evt as TouchEvent).touches);
  }

  /**
   * @hidden
   * Returns a map of all subcomponents to subfoundations.
   */
  private getFoundationMap(): Partial<MDCSelectFoundationMap> {
    return {
      helperText: this.helperText?.foundation,
      leadingIcon: this.leadingIcon?.foundation
    };
  }
}

/** @hidden */
export interface IMdcSelectElement extends IValidatedElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcSelect;
    };
  };
  value: unknown;
}

function defineMdcSelectElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    value: {
      get(this: IMdcSelectElement) {
        return CustomElement.for<MdcSelect>(this).viewModel.value;
      },
      set(this: IMdcSelectElement, value: unknown) {
        // aurelia binding converts "undefined" and "null" into empty string
        // this does not translate well into "empty" menu items when several selects are bound to the same field
        CustomElement.for<MdcSelect>(this).viewModel.value = value === '' ? undefined : value;
      },
      configurable: true
    },
    options: {
      get(this: IMdcSelectElement) {
        return CustomElement.for<MdcSelect>(this).viewModel.root.querySelectorAll('.mdc-list-item');
      },
      configurable: true
    },
    selectedIndex: {
      get(this: IMdcSelectElement) {
        return CustomElement.for<MdcSelect>(this).viewModel.selectedIndex;
      },
      set(this: IMdcSelectElement, value: number) {
        CustomElement.for<MdcSelect>(this).viewModel.selectedIndex = value;
      },
      configurable: true
    },
    valid: {
      get(this: IMdcSelectElement) {
        return CustomElement.for<MdcSelect>(this).viewModel.valid;
      },
      set(this: IMdcSelectElement, value: boolean) {
        CustomElement.for<MdcSelect>(this).viewModel.valid = value;
      },
      configurable: true
    },
    addError: {
      value(this: IMdcSelectElement, error: IError) {
        CustomElement.for<MdcSelect>(this).viewModel.addError(error);
      },
      configurable: true
    },
    removeError: {
      value(this: IMdcSelectElement, error: IError) {
        CustomElement.for<MdcSelect>(this).viewModel.removeError(error);
      },
      configurable: true
    },
    renderErrors: {
      value(this: IMdcSelectElement): void {
        CustomElement.for<MdcSelect>(this).viewModel.renderErrors();
      },
      configurable: true
    },
    focus: {
      value(this: IMdcSelectElement) {
        CustomElement.for<MdcSelect>(this).viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcSelectElement) {
        CustomElement.for<MdcSelect>(this).viewModel.blur();
      },
      configurable: true
    }
  });
}
