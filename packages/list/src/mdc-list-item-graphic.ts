import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-list-item-graphic')
export class MdcListItemGraphic {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-list-item__graphic');
  }
}
