import { customAttribute } from 'aurelia-framework';

/**
 * Optional, marks the leading control or media element
 * @selector [mdc-list-item-leading]
 */
@customAttribute('mdc-list-item-leading')
export class MdcListItemLeading {
  constructor(private root: Element) { }

  /** Optional leading element type. In most cases you don't need to supply it.
   * Only when the element is ambiguous, e.g. <img> or a generic <span>
  */
  value: 'checkbox' | 'radio' | 'switch' | 'icon' | 'image' | 'thumbnail' | 'video' | 'avatar';

  attached() {
    let value = this.value;
    if (!value) {
      if (this.root.classList.contains('mdc-checkbox')) {
        value = 'checkbox';
      } else if (this.root.classList.contains('mdc-radio')) {
        value = 'radio';
      } else if (this.root.classList.contains('mdc-switch')) {
        value = 'switch';
      } else if (this.root.classList.contains('material-icons')) {
        value = 'icon';
      } else if (this.root.tagName === 'IMG') {
        value = 'image';
      }
    }
    this.root.parentElement?.parentElement?.classList.add(`mdc-list-item--with-leading-${value}`);
  }
}
