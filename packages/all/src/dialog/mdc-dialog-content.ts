import { customElement, inject } from 'aurelia';

/**
 * Optional. Primary content area. May contain a list, a form, or prose.
 * @selector mdc-dialog-content
 */
@inject(Element)
@customElement({ name: 'mdc-dialog-content', template: '<template class="mdc-dialog__content"><au-slot></au-slot></template>' })
export class MdcDialogContent {
  constructor(public root: HTMLElement) { }
}
