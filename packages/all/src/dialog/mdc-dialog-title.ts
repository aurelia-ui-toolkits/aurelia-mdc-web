import { customElement } from 'aurelia';

/**
 * Optional. The area containing the dialog's title.
 * @selector mdc-dialog-title
 */
@customElement({ name: 'mdc-dialog-title', template: '<template class="mdc-dialog__title"><au-slot></au-slot></template>' })
export class MdcDialogTitle { }
