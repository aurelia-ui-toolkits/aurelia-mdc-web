import { customAttribute, inject } from 'aurelia-framework';
import { MdcRipple } from '@aurelia-mdc-web/ripple';

@inject(Element)
@customAttribute('mdc-top-app-bar-action-item')
export class MdcTopAppBarActionItem {
  constructor(private root: HTMLElement) { }

  ripple: MdcRipple;

  async attached() {
    this.root.setAttribute('role', 'button');
    this.root.classList.add('mdc-top-app-bar__action-item', 'mdc-icon-button')
    this.ripple = new MdcRipple(this.root);
    await this.ripple.attached();
    this.ripple.unbounded = true;
  }

  detached() {
    this.ripple.detached();
  }
}
