import { customElement, inject, bindable, BindingMode, CustomElement } from 'aurelia';
import { DiscardablePromise } from './discardable-promise';
import { MdcDefaultLookupConfiguration } from './mdc-lookup-configuration';
import { MdcMenu, IMdcMenuItemComponentEvent } from '@aurelia-mdc-web/menu';
import { IValidatedElement, IError, booleanAttr, number } from '@aurelia-mdc-web/base';
import { closest } from '@material/dom/ponyfill';
import { MdcMenuSurface } from '@aurelia-mdc-web/menu-surface';
import template from './mdc-lookup.html?raw';

const inputEvents = ['click', 'input', 'keydown', 'blur'];
const bodyEvents = ['touchstart', 'mousedown', 'click'];

/**
 * @selector mdc-lookup
 */
@inject(Element, MdcDefaultLookupConfiguration)
@customElement({ name: 'mdc-lookup', template })
export class MdcLookup implements EventListenerObject {
  constructor(private root: HTMLElement, private defaultConfiguration: MdcDefaultLookupConfiguration) {
    defineMdcLookupElementApis(this.root);
  }

  private menuSurface: MdcMenuSurface;
  public isWrapperOpen: boolean = false;
  public optionsArray?: unknown[];
  public focusedOption: unknown = undefined;
  public searching: boolean = false;
  public errorMessage: string | undefined = undefined;
  public notFound: boolean = false;
  public menu: MdcMenu;

  /** Reference to the input */
  @bindable()
  public input?: HTMLInputElement & { isFocused: boolean };

  /** Sets the menu list to have two lines */
  @bindable({ set: booleanAttr })
  twoLine: boolean;

  /**
   * Sets the way an option is displayed in the input element.
   * When set to a string, the object property with such name is used.
   * When set to a function, it is called with an option as a parameter to retrieve the display string.
   * When undefined, an option.toString() is used.
   */
  @bindable()
  displayField: string | undefined | ((option: unknown) => string);
  displayFieldChanged() {
    if (this.displayField instanceof Function) {
      this.getDisplay = this.displayField;
    } else if (typeof this.displayField === 'string') {
      this.getDisplay = option => (option as Record<string, string>)[this.displayField as string];
    } else {
      this.getDisplay = option => (option as Record<string, unknown>)?.toString() ?? '';
    }
  }

  getDisplay: (option: unknown) => string = option => (option as Record<string, unknown>)?.toString() ?? '';

  /**
   * Sets the way a value is set.
   * When set to a string, the object property with such name is used.
   * When set to a function, it is called with an option as a parameter to retrieve the value.
   * When undefined, an option is used as a value.
   */
  @bindable()
  valueField: string | undefined | ((option: unknown) => unknown);
  valueFieldChanged() {
    if (this.valueField instanceof Function) {
      this.getValue = this.valueField;
    } else if (typeof this.valueField === 'string') {
      this.getValue = option => option !== undefined ? (option as Record<string, unknown>)[this.valueField as string] : undefined;
    } else {
      this.getValue = option => option;
    }
  }

  getValue: (option: unknown) => unknown = option => option;

  /**
   * Sets the array of options to display.
   * Can be an async function which returns an array.
   */
  @bindable()
  options: unknown[] | undefined | ((filter: string, value: unknown) => Promise<unknown[]>);
  optionsChanged() {
    const shouldRefresh = this.getOptions !== undefined;
    this.setGetOptions();
    if (shouldRefresh) {
      this.optionsArray = undefined;
      this.value = undefined;
      if (this.preloadOptions) {
        this.loadOptions(false);
      }
    }
  }

  setGetOptions() {
    if (this.options instanceof Function) {
      this.getOptions = this.options;
    } else {
      this.getOptions = this.getOptionsDefault;
    }
  }

  /** Hoists the menu to document body */
  @bindable({ set: booleanAttr, mode: BindingMode.oneTime })
  hoistToBody: boolean;

  /** Sets the menu width to fit content */
  @bindable({ set: booleanAttr })
  naturalWidth: boolean;

  /** The CSS class to set on the menu. Helps styling body hoisted menus */
  @bindable()
  menuClass: string;

  getOptions: (filter: string | undefined, value: unknown) => Promise<unknown[]>;

  async getOptionsDefault(filter: string, value: unknown): Promise<unknown[]> {
    const options = this.options as unknown[];
    if (value !== undefined) {
      return Promise.resolve([options.find(x => this.getValue(x) === value)]);
    } else {
      return Promise.resolve(options.filter(x => this.getDisplay(x).toUpperCase().includes((filter || '').toUpperCase())));
    }
  }

  /** The selected value */
  @bindable({ mode: BindingMode.twoWay })
  value: unknown;
  suppressValueChanged: boolean;
  async valueChanged() {
    if (this.suppressValueChanged) {
      this.suppressValueChanged = false;
      return;
    }
    await this.updateFilterBasedOnValue();
    this.root.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { value: this.value } }));
  }
  setValue(value: unknown) {
    if (this.value === value) {
      return;
    }
    this.suppressValueChanged = true;
    this.value = value;
  }

  /** Sets debounce in milliseconds */
  @bindable({ set: number })
  debounce: number = this.defaultConfiguration.debounce;

  /** Loads the options to the menu when attached */
  @bindable({ set: booleanAttr })
  preloadOptions: boolean;

  /** Enables a first option select on blur */
  @bindable({ set: booleanAttr })
  selectOnBlur: boolean;

  /** Enables an item selection on Tab press */
  @bindable({ set: booleanAttr })
  selectOnTab: boolean;

  /** TODO: Enables the options list virtualisation */
  @bindable({ set: booleanAttr })
  virtual: boolean;

  bound() {
    this.valueFieldChanged();
    this.displayFieldChanged();
    this.setGetOptions();
  }

  async attached() {
    if (this.input) {
      inputEvents.forEach(x => this.input!.addEventListener(x, this));
    }
    await this.updateFilterBasedOnValue();
    if (!this.value && this.preloadOptions) {
      await this.loadOptions(false);
    }
    bodyEvents.forEach(x => document.body.addEventListener(x, this));
  }

  detaching() {
    if (this.input) {
      inputEvents.forEach(x => this.input!.removeEventListener(x, this));
    }
    bodyEvents.forEach(x => document.body.removeEventListener(x, this));
  }

  /** Opens lookup menu */
  open() {
    if (this.input?.disabled || this.input?.readOnly || this.menu.open || this.optionsArray === undefined && !this.searching && !this.errorMessage) {
      return;
    }
    if (!this.naturalWidth) {
      this.menu.root.style.width = `${this.input?.clientWidth}px`;
    }
    this.menu.open = true;
  }

  /** Closes lookup menu */
  close() {
    this.menu.open = false;
  }

  handleEvent(evt: Event): void {
    switch (evt.currentTarget) {
      case this.input:
        switch (evt.type) {
          case 'click': this.open(); break;
          case 'input': this.filterChanged(); break;
          case 'keydown': this.onInputKeydown(evt as KeyboardEvent); break;
          case 'blur': this.onBlur(); break;
        }
        break;
      case document.body:
        switch (evt.type) {
          case 'mousedown': this.onBodyMousedown(evt as MouseEvent); break;
          case 'touchstart': this.onBodyMousedown(evt as TouchEvent); break;
          case 'click': this.handleBodyClick(evt as MouseEvent); break;
        }
        break;
    }
  }

  debouncePromise: DiscardablePromise<void>;
  searchPromise: DiscardablePromise<unknown[]>;
  async filterChanged() {
    this.debouncePromise?.discard();
    this.debouncePromise = new DiscardablePromise(new Promise(r => setTimeout(() => r(), this.debounce ?? 0)));
    try {
      await this.debouncePromise;
    } catch (e) {
      return;
    }
    this.setValue(undefined);
    this.searchPromise?.discard();
    await this.loadOptions(this.input?.isFocused === true);
  }

  async loadOptions(open: boolean) {
    this.searching = true;
    this.errorMessage = undefined;
    if (open) {
      this.open();
    }
    this.optionsArray = undefined;
    try {
      this.searchPromise = new DiscardablePromise(this.getOptions(this.input?.value, undefined));
      this.optionsArray = await this.searchPromise;
      if (this.optionsArray === undefined) {
        this.close();
      }
    } catch (e) {
      if (e !== DiscardablePromise.discarded) {
        this.errorMessage = e.message;
        this.optionsArray = undefined;
      }
    } finally {
      this.searching = false;
    }
  }

  setFilter(filter: string | undefined) {
    if (!this.input || this.input.value === filter) {
      return;
    }
    this.input.value = filter ?? '';
  }

  async updateFilterBasedOnValue() {
    if (this.value !== undefined) {
      this.optionsArray = await this.getOptions(undefined, this.value);
    } else {
      this.optionsArray = undefined;
    }
    if (this.optionsArray?.length) {
      this.setFilter(this.getDisplay(this.optionsArray[0]));
    } else {
      this.setFilter(undefined);
    }
  }

  handleMenuItemAction(evt: IMdcMenuItemComponentEvent) {
    this.select(evt.detail.data);
  }

  select(option: unknown) {
    this.value = this.getValue(option);
    this.close();
    this.input?.focus();
  }

  suppressBlur: boolean;
  async onBlur() {
    if (this.suppressBlur) {
      this.suppressBlur = false;
      return;
    }
    if (this.selectOnBlur && this.optionsArray?.length && this.value === undefined) {
      this.value = this.getValue(this.optionsArray[0]);
    }
    this.close();
    // re-emit on root
    if (this.debouncePromise !== undefined) {
      await this.debouncePromise;
    }
    this.root.dispatchEvent(new CustomEvent('blur'));
    this.root.dispatchEvent(new CustomEvent('focusout'));
  }

  onInputKeydown(evt: KeyboardEvent) {
    switch (evt.code) {
      case 'ArrowDown': if (!this.menu.open) {
        this.open();
      }
        this.suppressBlur = true;
        this.menu.list_?.foundation?.focusFirstElement();
        break;
      case 'ArrowUp':
        if (!this.menu.open) {
          this.open();
        }
        this.suppressBlur = true;
        this.menu.list_?.foundation?.focusLastElement();
        break;
      case 'Space':
        if (evt.ctrlKey) {
          if (this.menu.open) {
            this.close();
          } else {
            this.loadOptions(true);
          }
        }
        break;
    }
  }

  onBodyMousedown(evt: MouseEvent | TouchEvent) {
    // this is needed to prevent text field label jumping
    if (closest(evt.target as HTMLElement, 'mdc-menu')) {
      evt.preventDefault();
    }
    return true;
  }

  handleBodyClick(evt: MouseEvent) {
    if (!closest(evt.target as HTMLElement, 'mdc-menu') && !(evt.target as HTMLElement).classList.contains('mdc-text-field') && !(evt.target as HTMLElement).classList.contains('mdc-text-field__input')) {
      this.menuSurface.foundation?.handleBodyClick(evt);
    }
  }

  handleMenuKeydown(event: KeyboardEvent) {
    if (this.hoistToBody && (event.key === 'Tab' || event.keyCode === 9)) {
      this.input?.focus();
    }
    return true;
  }

  addError(error: IError) {
    if (this.input && Object.getOwnPropertyDescriptor(this.input, 'addError')) {
      (this.input as HTMLElement as IValidatedElement).addError(error);
    }
  }

  removeError(error: IError) {
    if (this.input && Object.getOwnPropertyDescriptor(this.input, 'addError')) {
      (this.input as HTMLElement as IValidatedElement).removeError(error);
    }
  }

  renderErrors() {
    if (this.input && Object.getOwnPropertyDescriptor(this.input, 'renderErrors')) {
      (this.input as HTMLElement as IValidatedElement).renderErrors();
    }
  }
}

/** @hidden */
export interface IMdcLookupElement extends IValidatedElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcLookup;
    };
  };
}

function defineMdcLookupElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    addError: {
      value(this: IMdcLookupElement, error: IError) {
        CustomElement.for<MdcLookup>(this).viewModel.addError(error);
      },
      configurable: true
    },
    removeError: {
      value(this: IMdcLookupElement, error: IError) {
        CustomElement.for<MdcLookup>(this).viewModel.removeError(error);
      },
      configurable: true
    },
    renderErrors: {
      value(this: IMdcLookupElement): void {
        CustomElement.for<MdcLookup>(this).viewModel.renderErrors();
      },
      configurable: true
    },
  });
}
