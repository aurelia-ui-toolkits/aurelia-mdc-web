import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-top-app-bar-nav-icon')
export class MdcTopAppBarNavIcon {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.setAttribute('role', 'button');
    this.root.classList.add('mdc-top-app-bar__navigation-icon', 'mdc-icon-button');
  }
}
