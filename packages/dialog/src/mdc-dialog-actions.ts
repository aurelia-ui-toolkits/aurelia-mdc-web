import { customElement, inject, inlineView, children } from 'aurelia-framework';
import { MdcButton } from '@aurelia-mdc-web/button';

/**
 * Optional. Footer area containing the dialog's action buttons.
 * @selector mdc-dialog-actions
 */
@inject(Element)
@inlineView('<template class="mdc-dialog__actions"><slot></slot></template>')
@customElement('mdc-dialog-actions')
export class MdcDialogActions {
  @children('.mdc-button')
  buttons: MdcButton[];
  buttonsChanged() {
    for (let i = 0; i < this.buttons.length; ++i) {
      this.buttons[i].root.classList.add('mdc-dialog__button');
    }
  }
}
