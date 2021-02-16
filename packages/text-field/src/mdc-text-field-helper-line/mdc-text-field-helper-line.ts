import { inject, customElement, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

@inject(Element)
@customElement('mdc-text-field-helper-line')
@processContent(defaultSlotProcessContent)
export class MdcTextFieldHelperLine {
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
}

/** @hidden */
export interface IMdcTextFieldHelperLineElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcTextFieldHelperLine;
    };
  };
}
