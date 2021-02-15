import { inject, customElement, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

@inject(Element)
@customElement('mdc-text-field-helper-line')
@processContent(defaultSlotProcessContent)
export class MdcTextFieldHelperLine {
  @bindable
  errors: string[];
}

/** @hidden */
export interface IMdcTextFieldHelperLineElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcTextFieldHelperLine;
    };
  };
}
