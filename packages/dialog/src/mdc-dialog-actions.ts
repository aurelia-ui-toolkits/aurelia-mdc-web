import { customElement, inject, slotted } from 'aurelia';

/**
 * Optional. Footer area containing the dialog's action buttons.
 * @selector mdc-dialog-actions
 */
@inject(Element)
@customElement({ name: 'mdc-dialog-actions', template: '<template class="mdc-dialog__actions"><au-slot></au-slot></template>' })
export class MdcDialogActions {
  @slotted({ query: '.mdc-button' })
  buttons: HTMLElement[];
  buttonsChanged() {
    for (let i = 0; i < this.buttons.length; ++i) {
      this.buttons[i].classList.add('mdc-dialog__button');
    }
  }

  attached() {
    if (this.buttons) {
      this.buttonsChanged();
    }
  }
}
