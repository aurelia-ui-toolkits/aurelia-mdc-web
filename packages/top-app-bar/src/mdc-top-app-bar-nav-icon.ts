import { customAttribute, inject } from 'aurelia';

@inject(Element)
@customAttribute('mdc-top-app-bar-nav-icon')
export class MdcTopAppBarNavIcon {
  constructor(private root: HTMLElement) { }

  afterAttach() {
    this.root.setAttribute('role', 'button');
    this.root.classList.add('mdc-top-app-bar__navigation-icon', 'mdc-icon-button');
  }
}
