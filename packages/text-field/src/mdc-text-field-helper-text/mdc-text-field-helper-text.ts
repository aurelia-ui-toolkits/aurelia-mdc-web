import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTextFieldHelperTextFoundation, MDCTextFieldHelperTextAdapter, helperTextCssClasses } from '@material/textfield';
import { inject, customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-text-field-helper-text.html'))
@customElement(helperTextCssClasses.ROOT)
export class MdcTextFieldHelperText extends MdcComponent<MDCTextFieldHelperTextFoundation> {
  helperTextCssClasses = helperTextCssClasses;

  @bindable.booleanAttr
  persistent: boolean;

  @bindable.booleanAttr
  validation: boolean;

  // Provided for access by MDCTextField component
  get foundationForTextField(): MDCTextFieldHelperTextFoundation {
    return this.foundation!;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTextFieldHelperTextAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      setAttr: (attr, value) => this.root.setAttribute(attr, value),
      removeAttr: (attr) => this.root.removeAttribute(attr),
      setContent: (content) => {
        this.root.textContent = content;
      },
    };
    return new MDCTextFieldHelperTextFoundation(adapter);
  }
}

/** @hidden */
export interface IMdcTextFieldHelperTextElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcTextFieldHelperText;
    };
  };
}
