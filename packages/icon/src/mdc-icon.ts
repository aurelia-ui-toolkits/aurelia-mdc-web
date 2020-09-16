import { customElement, useView, PLATFORM, inject } from 'aurelia-framework';

/**
 * @selector mdc-icon
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-icon.html'))
@customElement('mdc-icon')
export class MdcIcon {
  constructor(public root: HTMLElement) { }
}
