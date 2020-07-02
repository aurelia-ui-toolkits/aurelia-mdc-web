import { useView, inject, customElement, processContent, ViewCompiler, ViewResources, BehaviorInstruction } from 'aurelia-framework';
import {
  MDCTextFieldFoundation, MDCTextFieldRootAdapter, MDCTextFieldInputAdapter, MDCTextFieldLabelAdapter, MDCTextFieldAdapter, MDCTextFieldFoundationMap,
  MDCTextFieldLineRippleAdapter, cssClasses, MDCTextFieldOutlineAdapter, helperTextStrings, characterCountStrings
} from '@material/textfield';
import { applyPassive } from '@material/dom/events';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MdcFloatingLabel } from '@aurelia-mdc-web/floating-label';
import { MdcLineRipple } from '@aurelia-mdc-web/line-ripple';
import { MDCRipple, MDCRippleFactory, MDCRippleAdapter, MDCRippleFoundation } from '@material/ripple';
import * as ponyfill from '@material/dom/ponyfill';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcNotchedOutline } from '@aurelia-mdc-web/notched-outline';
import { MdcTextFieldIcon, mdcIconStrings, IMdcTextFieldIconElement } from './mdc-text-field-icon';
import { MdcTextFieldHelperText, IMdcTextFieldHelperTextElement } from './mdc-text-field-helper-text/mdc-text-field-helper-text';
import { MdcTextFieldCharacterCounter, IMdcTextFieldCharacterCounterElement } from './mdc-text-field-character-counter';

/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
const MOUSE_EVENT_IGNORE_TIME = 800;

@inject(Element)
@useView('./mdc-text-field.html')
@customElement(cssClasses.ROOT)
@processContent(MdcTextField.processContent)
export class MdcTextField extends MdcComponent<MDCTextFieldFoundation> {
  constructor(root: HTMLElement) {
    super(root);
    defineMdcTextFieldElementApis(this.root);
  }

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element, _instruction: BehaviorInstruction) {
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
  ripple: MDCRipple | null;
  outline_!: MdcNotchedOutline | null; // assigned in html
  leadingIcon_: MdcTextFieldIcon | undefined;
  trailingIcon_: MdcTextFieldIcon | undefined;
  helperText_: MdcTextFieldHelperText | undefined;
  characterCounter_: MdcTextFieldCharacterCounter | undefined;

  /** Time in milliseconds when the last touchstart event happened. */
  private _lastTouchStartEvent: number = 0;

  @bindable
  label: string;

  @bindable.booleanAttr
  outlined: boolean;

  @bindable.number
  maxlength: number;

  @bindable
  prefix: string;

  @bindable
  suffix: string;

  @bindable.booleanAttr
  required: boolean;

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

  async initialise() {
    this.leadingIcon_ = this.root.querySelector<IMdcTextFieldIconElement>(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.LEADING}]`)?.au['mdc-text-field-icon'].viewModel;
    this.trailingIcon_ = this.root.querySelector<IMdcTextFieldIconElement>(`[${mdcIconStrings.ATTRIBUTE}][${mdcIconStrings.TRAILING}]`)?.au['mdc-text-field-icon'].viewModel;
    this.ripple = this.createRipple_((el, foundation) => new MDCRipple(el, foundation));
    const nextSibling = this.root.nextElementSibling;
    if (nextSibling?.tagName === cssClasses.HELPER_LINE.toUpperCase()) {
      this.helperText_ = nextSibling.querySelector<IMdcTextFieldHelperTextElement>(helperTextStrings.ROOT_SELECTOR)?.au.controller.viewModel;
      this.characterCounter_ = nextSibling.querySelector<IMdcTextFieldCharacterCounterElement>(characterCountStrings.ROOT_SELECTOR)?.au.controller.viewModel;
      await Promise.all([this.helperText_?.initialised, this.characterCounter_?.initialised].filter(x => x));
    }
  }

  async attached() {
    await super.attached();
    this.foundation.setValue(this.initialValue || '');
  }

  destroy() {
    this.ripple?.destroy();
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

  private createRipple_(rippleFactory: MDCRippleFactory): MDCRipple | null {
    const isTextArea = this.root.classList.contains(cssClasses.TEXTAREA);
    const isOutlined = this.root.classList.contains(cssClasses.OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    }

    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCRippleAdapter = {
      ...MDCRipple.createAdapter(this),
      isSurfaceActive: () => ponyfill.matches(this.input_, ':active'),
      registerInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        this.input_.removeEventListener(evtType, handler, applyPassive()),
    };
    return rippleFactory(this.root, new MDCRippleFoundation(adapter));
  }

  onInputInteraction(evt: MouseEvent | TouchEvent) {
    if (evt instanceof MouseEvent) {
      const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + MOUSE_EVENT_IGNORE_TIME;

      if (isSyntheticEvent) {
        return;
      }
    } else {
      this._lastTouchStartEvent = Date.now();
    }

    this.foundation.setTransformOrigin(evt);
    return true;
  }

  onInput(evt: Event): void {
    const value = (<any>evt.target).value;
    this.value = value;
    this.foundation.handleInput();
    this.emit('input', {}, true);
  }

  async onFocus() {
    await this.initialised;
    this.foundation.activateFocus();
  }

  onChange(evt: Event): void {
    const value = (evt.target as HTMLInputElement).value;
    this.value = value;
    this.emit('change', {}, true);
  }

  onBlur(): void {
    this.foundation.deactivateFocus();
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
