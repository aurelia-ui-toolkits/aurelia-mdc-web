import { customElement, inject } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

/**
 * Optional. Footer area containing the dialog's action buttons.
 * @selector mdc-dialog-actions
 */
@inject(Element)
@customElement({ name: 'mdc-dialog-actions', template: '<template class="mdc-dialog__actions"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcDialogActions {
  constructor(private root: HTMLElement) { }

  attached() {
    const children = this.root.children;
    for (let i = 0; i < children.length; ++i) {
      const child = children[i];
      if (child.classList.contains('mdc-button')) {
        child.classList.add('mdc-dialog__button');
      }
    }
  }
}
