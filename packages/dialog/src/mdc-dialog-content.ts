import { customElement, inject } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

/**
 * Optional. Primary content area. May contain a list, a form, or prose.
 * @selector mdc-dialog-content
 */
@inject(Element)
@customElement({ name: 'mdc-dialog-content', template: '<template class="mdc-dialog__content"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcDialogContent {
  constructor(public root: HTMLElement) { }
}
