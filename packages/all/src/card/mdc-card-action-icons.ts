import { customElement, inject } from 'aurelia';

/**
 * Optional. A group of supplemental action icons, displayed on the right side of the card (in LTR).
 * @selector mdc-card-action-icons
 */
@inject(Element)
@customElement({ name: 'mdc-card-action-icons', template: '<template class="mdc-card__action-icons"><au-slot></au-slot></template>' })
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
