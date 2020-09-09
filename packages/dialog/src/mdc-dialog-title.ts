import { customElement, inlineView } from 'aurelia-framework';

/**
 * Optional. The area containing the dialog's title.
 * @selector mdc-dialog-title
 */
@inlineView('<template class="mdc-dialog__title"><slot></slot></template>')
@customElement('mdc-dialog-title')
export class MdcDialogTitle { }
