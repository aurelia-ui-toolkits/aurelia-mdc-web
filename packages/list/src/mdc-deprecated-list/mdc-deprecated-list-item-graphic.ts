import { customAttribute, inject } from 'aurelia-framework';

/**
 * Optional. The first tile in the row (in LTR languages, the first column of the list item). Typically an icon or image.
 * @selector [mdc-deprecated-list-item-graphic]
 */
@inject(Element)
@customAttribute('mdc-deprecated-list-item-graphic')
export class MdcDeprecatedListItemGraphic {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-deprecated-list-item__graphic');
  }
}
