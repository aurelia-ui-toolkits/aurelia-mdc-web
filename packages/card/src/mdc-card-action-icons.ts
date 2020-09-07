import { customElement, inlineView, inject } from 'aurelia-framework';

/**
 * Optional. A group of supplemental action icons, displayed on the right side of the card (in LTR).
 * @selector mdc-card-action-icons
 */
@inject(Element)
@inlineView('<template class="mdc-card__action-icons"><slot></slot></template>')
@customElement('mdc-card-action-icons')
export class MdcCardActionIcons {
  constructor(private root: HTMLElement) { }

  attached() {
    const children = this.root.querySelectorAll('.mdc-icon-button');
    for (let i = 0; i < children.length; ++i) {
      const child = children[i];
      child.classList.add('mdc-card__action', 'mdc-card__action--icon');
    }
  }
}
