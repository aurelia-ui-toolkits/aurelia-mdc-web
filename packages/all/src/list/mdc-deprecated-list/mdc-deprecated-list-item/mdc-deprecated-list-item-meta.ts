import { customAttribute, inject } from 'aurelia';

/**
 * Optional. The last tile in the row (in LTR languages, the last column of the list item). Typically small text, icon. or image.
 * @selector [mdc-deprecated-list-item-meta]
 */
@inject(Element)
@customAttribute('mdc-deprecated-list-item-meta')
export class MdcDeprecatedListItemMeta {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-deprecated-list-item__meta');
  }
}
