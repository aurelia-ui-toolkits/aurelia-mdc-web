import { customElement, inlineView } from "aurelia-framework";

@inlineView('<template class="mdc-dialog__title"><slot></slot></template>')
@customElement('mdc-dialog-title')
export class MdcDialogTitle { }
