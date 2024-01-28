import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCTextFieldHelperTextFoundation, MDCTextFieldHelperTextAdapter, helperTextCssClasses } from '@material/textfield';
import { inject, customElement, bindable } from 'aurelia';
import template from './mdc-text-field-helper-text.html';

@inject(Element)
@customElement({ name: 'mdc-text-field-helper-text', template })
export class MdcTextFieldHelperText extends MdcComponent<MDCTextFieldHelperTextFoundation> {
  helperTextCssClasses = helperTextCssClasses;

  @bindable({ set: booleanAttr })
  persistent: boolean;

  @bindable({ set: booleanAttr })
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
      getAttr: (attr) => this.root.getAttribute(attr),
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
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcTextFieldHelperText;
    };
  };
}
