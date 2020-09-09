import { customElement, inject, inlineView } from 'aurelia-framework';

/**
 * Optional. Footer area containing the dialog's action buttons.
 * @selector mdc-dialog-actions
 */
@inject(Element)
@inlineView('<template class="mdc-dialog__actions"><slot></slot></template>')
@customElement('mdc-dialog-actions')
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
