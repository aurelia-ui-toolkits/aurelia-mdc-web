import { customElement, inject, children } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';
import { MdcButton } from '@aurelia-mdc-web/button';

/**
 * Optional. Footer area containing the dialog's action buttons.
 * @selector mdc-dialog-actions
 */
@inject(Element)
@customElement({ name: 'mdc-dialog-actions', template: '<template class="mdc-dialog__actions"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcDialogActions {
  @children({ query: controller => controller.host.querySelectorAll('.mdc-button') })
  buttons: MdcButton[];
  buttonsChanged() {
    for (let i = 0; i < this.buttons.length; ++i) {
      this.buttons[i].root.classList.add('mdc-dialog__button');
    }
  }

  attached() {
    if (this.buttons) {
      this.buttonsChanged();
    }
  }
}
