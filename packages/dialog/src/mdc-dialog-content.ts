import { customElement, inlineView, inject } from 'aurelia-framework';

/**
 * Optional. Primary content area. May contain a list, a form, or prose.
 * @selector mdc-dialog-content
 */
@inject(Element)
@inlineView('<template class="mdc-dialog__content"><slot></slot></template>')
@customElement('mdc-dialog-content')
export class MdcDialogContent {
  constructor(public root: HTMLElement) { }
}
