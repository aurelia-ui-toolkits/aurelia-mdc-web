import { customAttribute, inject } from 'aurelia-framework';

/**
 * Optional. The first tile in the row (in LTR languages, the first column of the list item). Typically an icon or image.
 * @selector [mdc-list-item-graphic]
 */
@inject(Element)
@customAttribute('mdc-list-item-graphic')
export class MdcListItemGraphic {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-list-item__graphic');
  }
}
