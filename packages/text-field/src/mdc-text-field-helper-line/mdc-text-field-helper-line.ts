import { inject, customElement, bindable } from 'aurelia';
import template from './mdc-text-field-helper-line.html';

@inject(Element)
@customElement({ name: 'mdc-text-field-helper-line', template })
export class MdcTextFieldHelperLine {
  @bindable()
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
