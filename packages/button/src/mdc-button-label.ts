import { inject, customAttribute } from 'aurelia-framework';

/**
 * The mdc-button-label attribute is required in order for the trailing icon to be styled appropriately.
 * @selector [mdc-button-label]
 */
@inject(Element)
@customAttribute('mdc-button-label')
export class MdcButtonLabel {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-button__label');
  }
}
