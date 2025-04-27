import { customElement, inject } from 'aurelia';
import template from './mdc-icon.html?raw';

/**
 * @selector mdc-icon
 */
@inject(Element)
@customElement({ name: 'mdc-icon', template })
export class MdcIcon {
  constructor(public root: HTMLElement) { }
}
