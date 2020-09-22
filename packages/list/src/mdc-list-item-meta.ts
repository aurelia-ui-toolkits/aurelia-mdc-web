import { customAttribute, inject } from 'aurelia-framework';

/**
 * Optional. The last tile in the row (in LTR languages, the last column of the list item). Typically small text, icon. or image.
 * @selector [mdc-list-item-meta]
 */
@inject(Element)
@customAttribute('mdc-list-item-meta')
export class MdcListItemMeta {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-list-item__meta');
  }
}
