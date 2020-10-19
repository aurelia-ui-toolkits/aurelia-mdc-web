import { customAttribute, inject } from 'aurelia';

@inject(Element)
@customAttribute('mdc-top-app-bar-action-item')
export class MdcTopAppBarActionItem {
  constructor(private root: HTMLElement) { }

  afterAttach() {
    this.root.setAttribute('role', 'button');
    this.root.classList.add('mdc-top-app-bar__action-item', 'mdc-icon-button');
  }
}
