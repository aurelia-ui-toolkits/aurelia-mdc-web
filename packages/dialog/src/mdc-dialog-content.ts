import { customElement, inlineView, inject } from 'aurelia-framework';

@inject(Element)
@inlineView('<template class="mdc-dialog__content"><slot></slot></template>')
@customElement('mdc-dialog-content')
export class MdcDialogContent {
  constructor(public root: HTMLElement) { }
}
