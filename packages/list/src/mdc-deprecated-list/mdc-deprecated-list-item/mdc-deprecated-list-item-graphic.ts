import { customAttribute } from 'aurelia';

/**
 * Optional. The first tile in the row (in LTR languages, the first column of the list item). Typically an icon or image.
 * @selector [mdc-deprecated-list-item-graphic]
 */
@customAttribute('mdc-deprecated-list-item-graphic')
export class MdcDeprecatedListItemGraphic {
  constructor(private root: Element) { }

  attached() {
    this.root.classList.add('mdc-deprecated-list-item__graphic');
  }
}
