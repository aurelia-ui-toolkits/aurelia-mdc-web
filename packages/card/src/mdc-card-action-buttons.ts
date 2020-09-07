import { customElement, inlineView, inject } from 'aurelia-framework';

/**
 * Optional. A group of action buttons, displayed on the left side of the card (in LTR).
 * @selector mdc-card-action-buttons
 */
@inject(Element)
@inlineView('<template class="mdc-card__action-buttons"><slot></slot></template>')
@customElement('mdc-card-action-buttons')
export class MdcCardActionButtons {
  constructor(private root: HTMLElement) { }

  attached() {
    const children = this.root.querySelectorAll('.mdc-button');
    for (let i = 0; i < children.length; ++i) {
      const child = children[i];
      child.classList.add('mdc-card__action', 'mdc-card__action--button');
    }
  }
}
