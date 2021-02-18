import { customElement } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

/**
 * Optional. The area containing the dialog's title.
 * @selector mdc-dialog-title
 */
@customElement({ name: 'mdc-dialog-title', template: '<template class="mdc-dialog__title"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcDialogTitle { }
