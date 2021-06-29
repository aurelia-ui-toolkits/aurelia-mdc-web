import { customAttribute } from 'aurelia';

/**
 * Optional, marks the trailing control element
 * @selector [mdc-list-item-trailing]
 */
@customAttribute('mdc-list-item-trailing')
export class MdcListItemTrailing {
  constructor(private root: Element) { }

  /** Optional leading element type. In most cases you don't need to supply it.
   * Only when the element is ambiguous, e.g. <img> or a generic <span>
  */
  value: 'meta' | 'checkbox' | 'radio' | 'switch' | 'icon';

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
      }
    }
    this.root.parentElement?.parentElement?.classList.add(`mdc-list-item--with-trailing-${value}`);
  }
}
