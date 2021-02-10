import { inject, customAttribute } from 'aurelia-framework';

/**
 * Optional. Can be used with SVG icons, for example.
 * @selector [mdc-fab-icon]
 */
@inject(Element)
@customAttribute('mdc-fab-icon')
export class MdcFabIcon {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-fab__icon');
  }
}
