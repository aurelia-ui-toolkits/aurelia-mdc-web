import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-menu-selection-group-icon')
export class MdcMenuSelectionGroupIcon {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-menu__selection-group-icon');
  }
}
