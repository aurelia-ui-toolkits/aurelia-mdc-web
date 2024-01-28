import { MdcComponent, booleanAttr, defaultSlotProcessContent } from '@aurelia-mdc-web/base';
import { helperTextCssClasses, MDCSelectHelperTextFoundation, MDCSelectHelperTextAdapter } from '@material/select';
import { customElement, inject, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import template from './mdc-select-helper-text.html';

export const mdcHelperTextCssClasses = {
  ROOT: 'mdc-select-helper-text'
};

@inject(Element)
@customElement({ name: 'mdc-select-helper-text', template })
@processContent(defaultSlotProcessContent)
export class MdcSelectHelperText extends MdcComponent<MDCSelectHelperTextFoundation> {
  helperTextCssClasses = helperTextCssClasses;
  ROOT = mdcHelperTextCssClasses.ROOT;

  @bindable({ set: booleanAttr })
  persistent: boolean;

  @bindable({ set: booleanAttr })
  validation: boolean;

  @bindable
  errors: string[];

  attachedPromise = this.createAttachedPromise();
  protected attachedPromiseResolve: (value?: unknown) => void;

  private async createAttachedPromise() {
    return new Promise(r => this.attachedPromiseResolve = r);
  }

  attached() {
    this.attachedPromiseResolve();
  }

  detached() {
    this.attachedPromise = this.createAttachedPromise();
  }

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
      getAttr: (attr) => this.root.getAttribute(attr),
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
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcSelectHelperText;
    };
  };
}
