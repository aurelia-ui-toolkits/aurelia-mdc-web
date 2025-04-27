import { inject, customElement, INode, bindable } from 'aurelia';
import {
  MDCTextFieldFoundation, MDCTextFieldRootAdapter, MDCTextFieldInputAdapter, MDCTextFieldLabelAdapter, MDCTextFieldAdapter, MDCTextFieldFoundationMap,
  MDCTextFieldLineRippleAdapter, MDCTextFieldOutlineAdapter, cssClasses, helperTextStrings, characterCountStrings
} from '@material/textfield';
import { applyPassive } from '@material/dom/events';
import { MdcComponent, IValidatedElement, IError, booleanAttr, number } from '../base';
import { MdcTextFieldIcon, mdcIconStrings, IMdcTextFieldIconElement } from './mdc-text-field-icon';
import { MdcTextFieldHelperText } from './mdc-text-field-helper-text/mdc-text-field-helper-text';
import { MdcTextFieldCharacterCounter } from './mdc-text-field-character-counter';
import { MdcTextFieldHelperLine } from './mdc-text-field-helper-line/mdc-text-field-helper-line';
import { processContent, IPlatform, CustomAttribute, CustomElement } from '@aurelia/runtime-html';
import { MdcDefaultTextFieldConfiguration } from './mdc-default-text-field-configuration';
import template from './mdc-text-field.html?raw';
import { MdcFloatingLabel } from '../floating-label/mdc-floating-label';
import { MdcLineRipple } from '../line-ripple/mdc-line-ripple';
import { MdcNotchedOutline } from '../notched-outline/mdc-notched-outline';

let textFieldId = 0;
const leadingIconSelector = '.mdc-text-field__icon--leading';
const trailingIconSelector = '.mdc-text-field__icon--trailing';

@inject(Element, IPlatform, MdcDefaultTextFieldConfiguration)
@customElement({ name: 'mdc-text-field', template })
@processContent(function processContent(node: INode) {
  const element = node as HTMLElement;
  // move icons to slots - this allows omitting slot specification
  const leadingIcon = element.querySelector(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.LEADING}]`);
  leadingIcon?.setAttribute('au-slot', 'leading-icon');
  const trailingIcon = element.querySelector(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.TRAILING}]`);
  trailingIcon?.setAttribute('au-slot', 'trailing-icon');
}
)
export class MdcTextField extends MdcComponent<MDCTextFieldFoundation> {
  constructor(root: HTMLElement, private platform: IPlatform, private defaultConfiguration: MdcDefaultTextFieldConfiguration) {
    super(root);
    this.outlined = this.defaultConfiguration.outlined;
    defineMdcTextFieldElementApis(this.root);
  }

  id: string = `mdc-text-field-${++textFieldId}`;
  id1: string = `mdc-text-field-${textFieldId}`;
  input_: HTMLInputElement;
  label_?: MdcFloatingLabel = undefined;
  lineRipple_: MdcLineRipple;
  outline_!: MdcNotchedOutline | null; // assigned in html
  helperText_: MdcTextFieldHelperText | undefined;
  characterCounter_?: MdcTextFieldCharacterCounter;
  errors = new Map<IError, boolean>();
  leadingIcon_: MdcTextFieldIcon | undefined;
  trailingIcon_: MdcTextFieldIcon | undefined;
  mutationObserver = new MutationObserver(mutations => this.mutated(mutations));

  @bindable()
  label: string;
  labelChanged() {
    this.platform.domQueue.queueTask(() => {
      if (this.foundation) {
        const openNotch = this.foundation.shouldFloat;
        this.foundation.notchOutline(openNotch);
      }
    });
  }

  @bindable({ set: booleanAttr })
  textarea: boolean;

  @bindable({ set: booleanAttr })
  endAligned: boolean;

  @bindable({ set: booleanAttr })
  ltrText: boolean;

  @bindable({ set: booleanAttr })
  outlined?: boolean;

  @bindable()
  prefix: string;

  @bindable()
  suffix: string;

  @bindable({ set: booleanAttr })
  required?: boolean;
  requiredChanged() {
    if (this.required !== undefined) {
      this.input_.required = this.required;
      this.foundation?.setUseNativeValidation(true);
    }
  }

  @bindable({ set: booleanAttr })
  disabled: boolean;
  disabledChanged() {
    this.input_.disabled = this.disabled;
    this.foundation?.setDisabled(this.disabled);
  }

  @bindable({ set: booleanAttr })
  readonly: boolean;
  readonlyChanged() {
    this.input_.readOnly = this.readonly;
  }

  /** Makes the element blur on Enter key press */
  @bindable({ set: booleanAttr })
  blurOnEnter: boolean;

  @bindable()
  maxlength: string;
  maxlengthChanged() {
    if (this.maxlength) {
      this.input_.setAttribute('maxlength', this.maxlength);
    } else {
      this.input_.removeAttribute('maxlength');
    }
  }

  @bindable()
  rows: string;
  rowsChanged() {
    if (this.rows) {
      this.input_.setAttribute('rows', this.rows);
    } else {
      this.input_.removeAttribute('rows');
    }
  }

  @bindable()
  cols: string;
  colsChanged() {
    if (this.rows) {
      this.input_.setAttribute('cols', this.cols);
    } else {
      this.input_.removeAttribute('cols');
    }
  }

  @bindable()
  max: string;
  maxChanged() {
    if (this.max === undefined) {
      this.input_.removeAttribute('max');
    } else {
      this.input_.max = this.max;
    }
  }

  @bindable()
  min: string;
  minChanged() {
    if (this.min === undefined) {
      this.input_.removeAttribute('min');
    } else {
      this.input_.min = this.min;
    }
  }

  @bindable()
  step: string;
  stepChanged() {
    if (this.step === undefined) {
      this.input_.removeAttribute('step');
    } else {
      this.input_.step = this.step;
    }
  }

  @bindable()
  autocomplete: AutoFill;
  autocompleteChanged() {
    if (this.autocomplete === undefined) {
      this.input_.removeAttribute('autocomplete');
    } else {
      this.input_.autocomplete = this.autocomplete;
    }
  }

  @bindable({ set: number })
  tabindex: number;
  tabindexChanged() {
    if (isNaN(this.tabindex)) {
      this.input_.removeAttribute('tabindex');
    } else {
      this.input_.tabIndex = this.tabindex;
    }
  }

  @bindable()
  type: string;
  typeChanged() {
    if (!this.textarea) {
      if (this.type === undefined) {
        this.input_.removeAttribute('type');
      } else {
        this.input_.type = this.type;
      }
    }
  }

  @bindable()
  name: string;
  nameChanged() {
    if (this.name === undefined) {
      this.input_.removeAttribute('name');
    } else {
      this.input_.name = this.name;
    }
  }

  @bindable()
  placeholder: string = ' '; // non empty placeholder solves the issue of misplaced labels in Safari

  private initialValue: string;
  get value(): string {
    if (this.foundation) {
      return this.foundation.getValue();
    } else {
      return this.initialValue;
    }
  }
  set value(value: string) {
    if (this.foundation) {
      if (this.foundation.getValue() !== value) {
        this.foundation.setValue(value === null || value === undefined ? '' : value.toString());
      }
    } else {
      this.initialValue = value;
    }
  }

  addError(error: IError) {
    this.errors.set(error, true);
    this.valid = false;
  }

  removeError(error: IError) {
    this.errors.delete(error);
    this.valid = this.errors.size === 0;
  }

  get valid(): boolean {
    return this.foundation?.isValid() ?? true;
  }

  set valid(value: boolean) {
    this.foundation?.setUseNativeValidation(false);
    this.foundation?.setValid(value);
  }

  renderErrors() {
    const helperLine = this.root.nextElementSibling;
    if (helperLine?.tagName === 'MDC-TEXT-FIELD-HELPER-LINE') {
      CustomElement.for<MdcTextFieldHelperLine>(helperLine).viewModel.errors = Array.from(this.errors.keys())
        .filter(x => x.message !== null).map(x => x.message!);
    }
  }

  async attaching() {
    const nextSibling = this.root.nextElementSibling;
    if (nextSibling?.tagName === cssClasses.HELPER_LINE.toUpperCase()) {
      await CustomElement.for<MdcTextFieldHelperLine>(nextSibling).viewModel.attachedPromise;
      const helperTextEl = nextSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
      this.helperText_ = helperTextEl ? CustomElement.for<MdcTextFieldHelperText>(nextSibling).viewModel : undefined;
      const characterCounterEl = nextSibling.querySelector(characterCountStrings.ROOT_SELECTOR);
      this.characterCounter_ = characterCounterEl ? CustomElement.for<MdcTextFieldCharacterCounter>(characterCounterEl).viewModel : undefined;
    }
  }

  beforeFoundationCreated() {
    this.maxlengthChanged();
    this.typeChanged();
    this.mutationObserver.observe(this.root, { subtree: true, childList: true });
    this.leadingIconChanged();
    this.trailingIconChanged();
  }

  mutated(mutations: MutationRecord[]) {
    if (mutations.find(x => [...Array.from(x.addedNodes), ...Array.from(x.removedNodes)].find(y => y instanceof HTMLElement && y.matches(leadingIconSelector)))) {
      this.leadingIconChanged();
    }
    if (mutations.find(x => [...Array.from(x.addedNodes), ...Array.from(x.removedNodes)].find(y => y instanceof HTMLElement && y.matches(trailingIconSelector)))) {
      this.trailingIconChanged();
    }
  }

  trailingIconChanged() {
    const el = this.root.querySelector<IMdcTextFieldIconElement>(trailingIconSelector);
    this.trailingIcon_ = el ? CustomAttribute.for<MdcTextFieldIcon>(el, mdcIconStrings.ATTRIBUTE)?.viewModel : undefined;
  }

  leadingIconChanged() {
    const el = this.root.querySelector<IMdcTextFieldIconElement>(leadingIconSelector);
    this.leadingIcon_ = el ? CustomAttribute.for<MdcTextFieldIcon>(el, mdcIconStrings.ATTRIBUTE)?.viewModel : undefined;
  }

  override destroy() {
    this.mutationObserver.disconnect();
  }

  initialSyncWithDOM() {
    this.value = this.initialValue;
    this.errors = new Map<IError, boolean>();
    this.valid = true;

    this.requiredChanged();
    this.disabledChanged();
    this.readonlyChanged();
    this.tabindexChanged();
    this.rowsChanged();
    this.colsChanged();
    this.minChanged();
    this.maxChanged();
    this.stepChanged();
    this.autocompleteChanged();
    this.nameChanged();
    // handle the case when attribute value was set, not bound, in html
    if (this.root.hasAttribute('value')) {
      this.value = this.root.getAttribute('value') ?? '';
    }
  }

  getDefaultFoundation() {
    const adapter: Partial<MDCTextFieldAdapter> = {
      ...this.getRootAdapterMethods_(),
      ...this.getInputAdapterMethods_(),
      ...this.getLabelAdapterMethods_(),
      ...this.getLineRippleAdapterMethods_(),
      ...this.getOutlineAdapterMethods_(),
    };
    return new MDCTextFieldFoundation(adapter, this.getFoundationMap_());
  }

  private getRootAdapterMethods_(): MDCTextFieldRootAdapter {
    return {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      registerTextFieldInteractionHandler: (evtType, handler) => this.listen(evtType, handler),
      deregisterTextFieldInteractionHandler: (evtType, handler) => this.unlisten(evtType, handler),
      registerValidationAttributeChangeHandler: (handler) => {
        const getAttributesList = (mutationsList: MutationRecord[]): string[] => {
          return mutationsList
            .map((mutation) => mutation.attributeName)
            .filter((attributeName) => attributeName) as string[];
        };
        const observer = new MutationObserver((mutationsList) => handler(getAttributesList(mutationsList)));
        const config = { attributes: true };
        observer.observe(this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect(),
    };
  }

  private getInputAdapterMethods_(): MDCTextFieldInputAdapter {
    return {
      getNativeInput: () => this.input_,
      setInputAttr: (attr, value) => {
        this.input_.setAttribute(attr, value);
      },
      removeInputAttr: (attr) => {
        this.input_.removeAttribute(attr);
      },
      isFocused: () => document.activeElement === this.input_,
      registerInputInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler, applyPassive()),
      deregisterInputInteractionHandler: (evtType, handler) => this.input_?.removeEventListener(evtType, handler, applyPassive()),
    };
  }

  private getLabelAdapterMethods_(): MDCTextFieldLabelAdapter {
    return {
      floatLabel: (shouldFloat) => this.label_?.float(shouldFloat),
      getLabelWidth: () => this.label_ ? this.label_.getWidth() : 0,
      hasLabel: () => Boolean(this.label_),
      shakeLabel: (shouldShake) => this.label_?.shake(shouldShake),
      setLabelRequired: (isRequired) => this.label_?.setRequired(isRequired),
    };
  }

  private getLineRippleAdapterMethods_(): MDCTextFieldLineRippleAdapter {
    return {
      activateLineRipple: () => this.lineRipple_?.activate(),
      deactivateLineRipple: () => this.lineRipple_?.deactivate(),
      setLineRippleTransformOrigin: (normalizedX) => this.lineRipple_?.setRippleCenter(normalizedX)
    };
  }

  private getOutlineAdapterMethods_(): MDCTextFieldOutlineAdapter {
    return {
      closeOutline: () => this.outline_?.closeNotch(),
      hasOutline: () => Boolean(this.outline_),
      notchOutline: (labelWidth) => this.outline_?.notch(labelWidth),
    };
  }

  /**
   * @return A map of all subcomponents to subfoundations.
   */
  private getFoundationMap_(): Partial<MDCTextFieldFoundationMap> {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_?.foundationForTextField : undefined,
      helperText: this.helperText_ ? this.helperText_.foundationForTextField : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundationForTextField : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundationForTextField : undefined,
    };
  }

  onInput(evt: Event): void {
    const value = (evt.target as HTMLInputElement).value;
    this.value = value;
  }

  onFocus() {
    this.foundation?.activateFocus();
    this.emit('focus', {}, true);
  }

  onChange(evt: Event): void {
    const value = (evt.target as HTMLInputElement).value;
    this.value = value;
  }

  onBlur(): void {
    this.foundation?.deactivateFocus();
    this.emit('blur', {}, true);
  }

  focus() {
    this.input_.focus();
  }

  blur() {
    this.input_.blur();
  }

  onKeyup(e: KeyboardEvent) {
    if (this.blurOnEnter && e.keyCode === 13) {
      this.blur();
    }
    return true;
  }
}

/** @hidden */
export interface IMdcTextFieldElement extends IValidatedElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcTextField;
    };
  };
  value: string;
}

function defineMdcTextFieldElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    tagName: {
      get() {
        return 'MDC-TEXT-FIELD';
      }
    },
    value: {
      get(this: IMdcTextFieldElement) {
        return CustomElement.for<MdcTextField>(this).viewModel.value;
      },
      set(this: IMdcTextFieldElement, value: string) {
        CustomElement.for<MdcTextField>(this).viewModel.value = value;
      },
      configurable: true
    },
    disabled: {
      get(this: IMdcTextFieldElement) {
        return CustomElement.for<MdcTextField>(this).viewModel.disabled;
      },
      set(this: IMdcTextFieldElement, value: boolean) {
        CustomElement.for<MdcTextField>(this).viewModel.disabled = value;
      },
      configurable: true
    },
    readOnly: {
      get(this: IMdcTextFieldElement) {
        return CustomElement.for<MdcTextField>(this).viewModel.readonly;
      },
      set(this: IMdcTextFieldElement, value: boolean) {
        CustomElement.for<MdcTextField>(this).viewModel.readonly = value;
      },
      configurable: true
    },
    valid: {
      get(this: IMdcTextFieldElement) {
        return CustomElement.for<MdcTextField>(this).viewModel.valid;
      },
      set(this: IMdcTextFieldElement, value: boolean) {
        CustomElement.for<MdcTextField>(this).viewModel.valid = value;
      },
      configurable: true
    },
    addError: {
      value(this: IMdcTextFieldElement, error: IError) {
        CustomElement.for<MdcTextField>(this).viewModel.addError(error);
      },
      configurable: true
    },
    removeError: {
      value(this: IMdcTextFieldElement, error: IError) {
        CustomElement.for<MdcTextField>(this).viewModel.removeError(error);
      },
      configurable: true
    },
    renderErrors: {
      value(this: IMdcTextFieldElement): void {
        CustomElement.for<MdcTextField>(this).viewModel.renderErrors();
      },
      configurable: true
    },
    focus: {
      value(this: IMdcTextFieldElement) {
        CustomElement.for<MdcTextField>(this).viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcTextFieldElement) {
        CustomElement.for<MdcTextField>(this).viewModel.blur();
      },
      configurable: true
    },
    isFocused: {
      get(this: IMdcTextFieldElement) {
        return document.activeElement === CustomElement.for<MdcTextField>(this).viewModel.input_;
      },
      configurable: true
    }
  });
}
