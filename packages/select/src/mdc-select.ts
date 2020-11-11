import { MdcComponent, IValidatedElement, IError } from '@aurelia-mdc-web/base';
import { cssClasses, MDCSelectFoundationMap, MDCSelectEventDetail, strings } from '@material/select';
import { inject, useView, customElement, processContent, ViewCompiler, ViewResources, children, bindingMode, TaskQueue } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { MdcSelectIcon, IMdcSelectIconElement, mdcIconStrings } from './mdc-select-icon';
import { MdcSelectHelperText, mdcHelperTextCssClasses, IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';
import { MdcLineRipple } from '@aurelia-mdc-web/line-ripple';
import { MdcFloatingLabel } from '@aurelia-mdc-web/floating-label';
import { MDCNotchedOutline } from '@material/notched-outline';
import { MdcMenu } from '@aurelia-mdc-web/menu';
import { MDCMenuItemEvent, Corner } from '@material/menu';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcListItem, IMdcListItemElement } from '@aurelia-mdc-web/list';
import { MDCSelectFoundationAurelia } from './mdc-select-foundation-aurelia';
import { MDCSelectAdapterAurelia } from './mdc-select-adapter-aurelia';
import { MDCMenuDistance } from '@material/menu-surface';

strings.CHANGE_EVENT = strings.CHANGE_EVENT.toLowerCase();

let selectId = 0;

@inject(Element, TaskQueue)
@useView(PLATFORM.moduleName('./mdc-select.html'))
@customElement(cssClasses.ROOT)
@processContent(MdcSelect.processContent)
export class MdcSelect extends MdcComponent<MDCSelectFoundationAurelia>{

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {
    // move icon to the slot - this allows omitting slot specification
    const leadingIcon = element.querySelector(`[${mdcIconStrings.ATTRIBUTE}]`);
    leadingIcon?.setAttribute('slot', 'leading-icon');
    return true;
  }

  constructor(root: HTMLElement, private taskQueue: TaskQueue) {
    super(root);
    defineMdcSelectElementApis(this.root);
  }

  id: string = `mdc-select-${++selectId}`;
  private menu: MdcMenu;
  private selectAnchor: HTMLElement;
  private selectedText: HTMLElement;

  private menuElement?: Element;

  @children('mdc-list-items')
  items: MdcListItem[];

  private leadingIcon?: MdcSelectIcon;

  private helperText?: MdcSelectHelperText;
  private lineRipple?: MdcLineRipple;
  private mdcLabel: MdcFloatingLabel;
  private outline?: MDCNotchedOutline;
  // private mutationObserver: MutationObserver;
  errors = new Map<IError, boolean>();

  @bindable
  label: string;

  @bindable.booleanAttr
  outlined: boolean;
  outlinedChanged() {
    this.taskQueue.queueTask(() => this.foundation?.layout());
  }

  @bindable.booleanAttr
  required: boolean;
  async requiredChanged() {
    await this.initialised;
    if (this.required) {
      this.selectAnchor.setAttribute('aria-required', 'true');
    } else {
      this.selectAnchor.removeAttribute('aria-required');
    }
    this.foundation?.setRequired(this.required);
    this.taskQueue.queueTask(() => this.foundation?.layout());
  }

  @bindable.booleanAttr
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    this.foundation?.setDisabled(this.disabled);
  }

  @bindable.booleanAttr({ defaultBindingMode: bindingMode.oneTime })
  hoistToBody: boolean;

  @bindable
  anchorMargin: Partial<MDCMenuDistance>;

  private initialValue: unknown;
  get value(): unknown {
    if (this.foundation) {
      return this.foundation.getValue();
    } else {
      return this.initialValue;
    }
  }

  set value(value: unknown) {
    this.setValue(value);
  }

  setValue(value: unknown, skipNotify: boolean = false) {
    if (this.foundation) {
      this.foundation.setValue(value, skipNotify);
      this.foundation.layout();
    } else {
      this.initialValue = value;
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
    const helperText = this.root.nextElementSibling as IMdcSelectHelperTextElement;
    if (helperText?.tagName === 'MDC-SELECT-HELPER-TEXT') {
      helperText.au.controller.viewModel.errors = Array.from(this.errors.keys())
        .filter(x => x.message !== null).map(x => x.message!);
    }
  }

  async initialise() {
    const leadingIconEl = this.root.querySelector<IMdcSelectIconElement>(`[${mdcIconStrings.ATTRIBUTE}]`);
    this.leadingIcon = leadingIconEl?.au['mdc-select-icon'].viewModel;
    const nextSibling = this.root.nextElementSibling;
    if (nextSibling?.tagName === mdcHelperTextCssClasses.ROOT.toUpperCase()) {
      this.helperText = (nextSibling as IMdcSelectHelperTextElement).au.controller.viewModel;
    }
    await Promise.all([this.helperText?.initialised, this.menu.initialised].filter(x => x));
    // TODO: leave it here for now
    // this.mutationObserver = DOM.createMutationObserver((mutations: MutationRecord[]) => {
    //   console.log(mutations);
    //   this.foundation?.setValue(this.value, true);
    // });
    // this.mutationObserver.observe(this.menuElement, {attributes: true, childList: true, characterData: true, subtree: true });
  }

  destroy() {
    // if (this.mutationObserver) {
    //   this.mutationObserver.disconnect();
    //   this.mutationObserver.takeRecords();
    // }
  }

  initialSyncWithDOM() {
    // set initial value without emitting change events
    this.foundation?.setValue(this.initialValue, true);
    this.foundation?.layout();
    this.errors = new Map<IError, boolean>();
    this.valid = true;
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
      openMenu: () => { this.menu.open = true; },
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
      getMenuItemValues: () => this.menu.items.map(x => (x as IMdcListItemElement).au.controller.viewModel.value),
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
  au: {
    controller: {
      viewModel: MdcSelect;
    };
  };
  value: unknown;
}

function defineMdcSelectElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    value: {
      get(this: IMdcSelectElement) {
        return this.au.controller.viewModel.value;
      },
      set(this: IMdcSelectElement, value: unknown) {
        // aurelia binding converts "undefined" and "null" into empty string
        // this does not translate well into "empty" menu items when several selects are bound to the same field
        this.au.controller.viewModel.value = value === '' ? undefined : value;
      },
      configurable: true
    },
    options: {
      get(this: IMdcSelectElement) {
        return this.au.controller.viewModel.root.querySelectorAll('.mdc-list-item');
      },
      configurable: true
    },
    selectedIndex: {
      get(this: IMdcSelectElement) {
        return this.au.controller.viewModel.selectedIndex;
      },
      set(this: IMdcSelectElement, value: number) {
        this.au.controller.viewModel.selectedIndex = value;
      },
      configurable: true
    },
    valid: {
      get(this: IMdcSelectElement) {
        return this.au.controller.viewModel.valid;
      },
      set(this: IMdcSelectElement, value: boolean) {
        this.au.controller.viewModel.valid = value;
      },
      configurable: true
    },
    addError: {
      value(this: IMdcSelectElement, error: IError) {
        this.au.controller.viewModel.addError(error);
      },
      configurable: true
    },
    removeError: {
      value(this: IMdcSelectElement, error: IError) {
        this.au.controller.viewModel.removeError(error);
      },
      configurable: true
    },
    renderErrors: {
      value(this: IMdcSelectElement): void {
        this.au.controller.viewModel.renderErrors();
      },
      configurable: true
    },
    focus: {
      value(this: IMdcSelectElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcSelectElement) {
        this.au.controller.viewModel.blur();
      },
      configurable: true
    }
  });
}
