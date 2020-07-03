import { useView, inject, customElement, processContent, ViewCompiler, ViewResources, BehaviorInstruction, PLATFORM, child } from 'aurelia-framework';
import {
  MDCTextFieldFoundation, MDCTextFieldRootAdapter, MDCTextFieldInputAdapter, MDCTextFieldLabelAdapter, MDCTextFieldAdapter, MDCTextFieldFoundationMap,
  MDCTextFieldLineRippleAdapter, cssClasses, MDCTextFieldOutlineAdapter, helperTextStrings, characterCountStrings
} from '@material/textfield';
import { applyPassive } from '@material/dom/events';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcFloatingLabel } from '@aurelia-mdc-web/floating-label';
import { MdcLineRipple } from '@aurelia-mdc-web/line-ripple';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcNotchedOutline } from '@aurelia-mdc-web/notched-outline';
import { MdcTextFieldIcon, mdcIconStrings, IMdcTextFieldIconElement } from './mdc-text-field-icon';
import { MdcTextFieldHelperText, IMdcTextFieldHelperTextElement } from './mdc-text-field-helper-text/mdc-text-field-helper-text';
import { MdcTextFieldCharacterCounter, IMdcTextFieldCharacterCounterElement } from './mdc-text-field-character-counter';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-text-field.html'))
@customElement(cssClasses.ROOT)
@processContent(MdcTextField.processContent)
export class MdcTextField extends MdcComponent<MDCTextFieldFoundation> {
  constructor(root: HTMLElement) {
    super(root);
    defineMdcTextFieldElementApis(this.root);
  }

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element, _instruction: BehaviorInstruction) {
    // move icons to slots - this allows omitting slot specification
    const leadingIcon = element.querySelector(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.LEADING}]`);
    if (leadingIcon) {
      leadingIcon.setAttribute('slot', 'leading-icon');
    }
    const trailingIcon = element.querySelector(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.TRAILING}]`);
    if (trailingIcon) {
      trailingIcon.setAttribute('slot', 'trailing-icon');
    }
    return true;
  }

  static id = 0;
  id: number = ++MdcTextField.id;
  input_: HTMLInputElement;
  label_: MdcFloatingLabel;
  lineRipple_: MdcLineRipple;
  outline_!: MdcNotchedOutline | null; // assigned in html
  helperText_: MdcTextFieldHelperText | undefined;
  characterCounter_: MdcTextFieldCharacterCounter | undefined;

  @bindable
  label: string;

  @bindable.booleanAttr
  outlined: boolean;

  @bindable
  prefix: string;

  @bindable
  suffix: string;

  @bindable.booleanAttr
  required: boolean;
  requiredChanged() {
    this.input_.required = this.required;
  }

  @bindable.booleanAttr
  disabled: boolean;
  disabledChanged() {
    this.input_.disabled = this.disabled;
  }

  @bindable.booleanAttr
  readonly: boolean;
  readonlyChanged() {
    this.input_.readOnly = this.readonly;
  }

  @bindable.number
  maxlength: number;
  maxlengthChanged() {
    this.input_.maxLength = this.maxlength;
  }

  @bindable
  max: string;
  maxChanged() {
    this.input_.max = this.max;
  }

  @bindable
  min: string;
  minChanged() {
    this.input_.min = this.min;
  }

  @bindable
  step: string;
  stepChanged() {
    this.input_.step = this.step;
  }

  @bindable.number
  tabindex: number;
  tabindexChanged() {
    this.input_.tabIndex = this.tabindex;
  }

  @bindable
  type: string;
  typeChanged() {
    this.input_.type = this.type;
  }

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
        this.foundation.setValue(value || '');
      }
    } else {
      this.initialValue = value;
    }
  }

  bind() {
    this.requiredChanged();
    this.disabledChanged();
    this.readonlyChanged();
    this.tabindexChanged();
    this.maxlengthChanged();
    this.minChanged();
    this.maxChanged();
    this.stepChanged();
    this.typeChanged();
    // handle the case when attribute value was set, not bound, in html
    if (this.root.hasAttribute('value')) {
      this.value = this.root.getAttribute('value') || '';
    }
  }

  initialSyncWithDOM() {
    this.value = this.initialValue;
  }

  @child(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.LEADING}]`)
  leadingIconEl: IMdcTextFieldIconElement;

  leadingIcon_: MdcTextFieldIcon | undefined;

  @child(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.TRAILING}]`)
  trailingIconEl: IMdcTextFieldIconElement;

  trailingIcon_: MdcTextFieldIcon | undefined;

  async initialise() {
    this.leadingIcon_ = this.leadingIconEl?.au['mdc-text-field-icon'].viewModel;
    this.trailingIcon_ = this.trailingIconEl?.au['mdc-text-field-icon'].viewModel;
    const nextSibling = this.root.nextElementSibling;
    if (nextSibling?.tagName === cssClasses.HELPER_LINE.toUpperCase()) {
      this.helperText_ = nextSibling.querySelector<IMdcTextFieldHelperTextElement>(helperTextStrings.ROOT_SELECTOR)?.au.controller.viewModel;
      this.characterCounter_ = nextSibling.querySelector<IMdcTextFieldCharacterCounterElement>(characterCountStrings.ROOT_SELECTOR)?.au.controller.viewModel;
      await Promise.all([this.helperText_?.initialised, this.characterCounter_?.initialised].filter(x => x));
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
      isFocused: () => document.activeElement === this.input_,
      registerInputInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler, applyPassive()),
      deregisterInputInteractionHandler: (evtType, handler) => this.input_.removeEventListener(evtType, handler, applyPassive()),
    };
  }

  private getLabelAdapterMethods_(): MDCTextFieldLabelAdapter {
    return {
      floatLabel: (shouldFloat) => this.label_ && this.label_.float(shouldFloat),
      getLabelWidth: () => this.label_ ? this.label_.getWidth() : 0,
      hasLabel: () => Boolean(this.label_),
      shakeLabel: (shouldShake) => this.label_ && this.label_.shake(shouldShake),
      setLabelRequired: (isRequired) => this.label_ && this.label_.setRequired(isRequired),
    };
  }

  private getLineRippleAdapterMethods_(): MDCTextFieldLineRippleAdapter {
    return {
      activateLineRipple: () => this.lineRipple_ && this.lineRipple_.activate(),
      deactivateLineRipple: () => this.lineRipple_ && this.lineRipple_.deactivate(),
      setLineRippleTransformOrigin: (normalizedX) => this.lineRipple_ && this.lineRipple_.setRippleCenter(normalizedX)
    };
  }

  private getOutlineAdapterMethods_(): MDCTextFieldOutlineAdapter {
    return {
      closeOutline: () => this.outline_ && this.outline_.closeNotch(),
      hasOutline: () => Boolean(this.outline_),
      notchOutline: (labelWidth) => this.outline_ && this.outline_.notch(labelWidth),
    };
  }

  /**
   * @return A map of all subcomponents to subfoundations.
   */
  private getFoundationMap_(): Partial<MDCTextFieldFoundationMap> {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundationForTextField : undefined,
      helperText: this.helperText_ ? this.helperText_.foundationForTextField : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundationForTextField : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundationForTextField : undefined,
    };
  }

  onInput(evt: Event): void {
    const value = (<any>evt.target).value;
    this.value = value;
    this.foundation?.handleInput();
    this.emit('input', {}, true);
  }

  async onFocus() {
    await this.initialised;
    this.foundation?.activateFocus();
  }

  onChange(evt: Event): void {
    const value = (evt.target as HTMLInputElement).value;
    this.value = value;
    this.emit('change', {}, true);
  }

  onBlur(): void {
    this.foundation?.deactivateFocus();
  }

  focus() {
    this.input_.focus();
  }

  blur() {
    this.input_.blur();
  }
}

export interface IMdcTextFieldElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcTextField;
    }
  }
}

function defineMdcTextFieldElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    value: {
      get(this: IMdcTextFieldElement) {
        return this.au.controller.viewModel.value;
      },
      set(this: IMdcTextFieldElement, value: any) {
        this.au.controller.viewModel.value = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcTextFieldElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcTextFieldElement) {
        this.au.controller.viewModel.blur();
      },
      configurable: true
    }
  });
};
