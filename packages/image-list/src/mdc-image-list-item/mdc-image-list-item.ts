import { customElement, inject, bindable } from 'aurelia';
import { number } from '@aurelia-mdc-web/base';

/**
 * Mandatory. Indicates each item in an Image List.
 * @selector mdc-image-list-item
 */
@inject(Element)
@customElement('mdc-image-list-item')
export class MdcImageListItem {
  constructor(private root: HTMLElement) { }

  /** Image url */
  @bindable
  src: string;

  /** Image label */
  @bindable
  label: string;

  hasAspect: boolean;

  /** Sets image aspect ratio */
  @bindable({ set: number })
  aspect: number;
  aspectChanged() {
    this.hasAspect = !isNaN(this.aspect);
    this.root.style.setProperty('--mdc-image-list-item-aspect', isNaN(this.aspect) ? '1' : `${this.aspect}`);
  }
}
