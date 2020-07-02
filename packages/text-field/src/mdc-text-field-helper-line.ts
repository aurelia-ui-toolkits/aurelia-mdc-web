import { inject, inlineView, customElement } from 'aurelia-framework';

@inject(Element)
@inlineView('<template class="mdc-text-field-helper-line"><slot></slot></template>')
@customElement('mdc-text-field-helper-line')
export class MdcTextFieldHelperLine {

}
