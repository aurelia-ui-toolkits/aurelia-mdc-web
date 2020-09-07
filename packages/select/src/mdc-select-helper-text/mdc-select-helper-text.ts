import { MdcComponent } from '@aurelia-mdc-web/base';
import { helperTextCssClasses, MDCSelectHelperTextFoundation, MDCSelectHelperTextAdapter } from '@material/select';
import { inject, customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

export const mdcHelperTextCssClasses = {
  ROOT: 'mdc-select-helper-text'
};

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-select-helper-text.html'))
@customElement(mdcHelperTextCssClasses.ROOT)
export class MdcSelectHelperText extends MdcComponent<MDCSelectHelperTextFoundation> {
  helperTextCssClasses = helperTextCssClasses;
  ROOT = mdcHelperTextCssClasses.ROOT;

  @bindable.booleanAttr
  persistent: boolean;

  @bindable.booleanAttr
  validation: boolean;

  @bindable
  errors: string[];

  // Provided for access by MDCTextField component
  get foundationForTextField(): MDCSelectHelperTextFoundation {
    return this.foundation!;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSelectHelperTextAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      setAttr: (attr, value) => this.root.setAttribute(attr, value),
      removeAttr: (attr) => this.root.removeAttribute(attr),
      setContent: (content) => {
        this.root.textContent = content;
      },
    };
    return new MDCSelectHelperTextFoundation(adapter);
  }
}

/** @hidden */
export interface IMdcSelectHelperTextElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcSelectHelperText;
    };
  };
}
