import { inject, customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-text-field-helper-line.html'))
@customElement('mdc-text-field-helper-line')
export class MdcTextFieldHelperLine {
  @bindable
  errors: string[];
}

/** @hidden */
export interface IMdcTextFieldHelperLineElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcTextFieldHelperLine;
    };
  };
}
