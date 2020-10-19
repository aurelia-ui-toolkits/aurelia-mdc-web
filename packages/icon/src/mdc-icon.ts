import { customElement, inject } from 'aurelia';

/**
 * @selector mdc-icon
 */
@inject(Element)
@customElement('mdc-icon')
export class MdcIcon {
  constructor(public root: HTMLElement) { }
}
