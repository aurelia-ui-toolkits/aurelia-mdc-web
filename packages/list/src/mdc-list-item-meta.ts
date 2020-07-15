import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-list-item-meta')
export class MdcListItemMate {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-list-item__meta');
  }
}
