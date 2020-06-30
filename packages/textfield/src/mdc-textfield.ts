import { useView, inject, customElement, bindable } from 'aurelia-framework';
import { MDCTextFieldFoundation, MDCTextFieldRootAdapter, MDCTextFieldInputAdapter, MDCTextFieldLabelAdapter, MDCTextFieldAdapter, MDCTextFieldFoundationMap, MDCTextFieldLineRippleAdapter } from '@material/textfield';
import { applyPassive } from '@material/dom/events';
import { MdcComponent } from './mdc-component';
import { MdcFloatingLabel } from './mdc-floating-label';
import { MdcLineRipple } from './mdc-line-ripple';

@inject(Element)
@useView('./mdc-textfield.html')
@customElement('mdc-textfield')
export class MdcTextField extends MdcComponent<MDCTextFieldFoundation> {
  static id = 0;
  id: number = ++MdcTextField.id;
  input_: HTMLInputElement;
  label_: MdcFloatingLabel;
  lineRipple_: MdcLineRipple;

  @bindable
  label: string;

  attached() {
    this.foundation = this.getDefaultFoundation();
    this.foundation.init();
  }

  detached() {
    this.foundation.destroy();
  }

  getDefaultFoundation() {
    const adapter: Partial<MDCTextFieldAdapter> = {
      ...this.getRootAdapterMethods_(),
      ...this.getInputAdapterMethods_(),
      ...this.getLabelAdapterMethods_(),
      ...this.getLineRippleAdapterMethods_(),
      // ...this.getOutlineAdapterMethods_(),
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

  /**
   * @return A map of all subcomponents to subfoundations.
   */
  private getFoundationMap_(): Partial<MDCTextFieldFoundationMap> {
    return {
      // characterCounter: this.characterCounter_ ?
      //     this.characterCounter_.foundationForTextField :
      //     undefined,
      // helperText: this.helperText_ ? this.helperText_.foundationForTextField :
      //                                undefined,
      // leadingIcon: this.leadingIcon_ ?
      //     this.leadingIcon_.foundationForTextField :
      //     undefined,
      // trailingIcon: this.trailingIcon_ ?
      //     this.trailingIcon_.foundationForTextField :
      //     undefined,
    };
  }
}
