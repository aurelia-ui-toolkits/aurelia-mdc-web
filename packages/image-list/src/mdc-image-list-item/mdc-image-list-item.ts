import { customElement, useView, PLATFORM, inject } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * Mandatory. Indicates each item in an Image List.
 * @selector mdc-image-list-item
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-image-list-item.html'))
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
  @bindable.number
  aspect: number;
  aspectChanged() {
    this.hasAspect = !isNaN(this.aspect);
    this.root.style.setProperty('--mdc-image-list-item-aspect', isNaN(this.aspect) ? '1' : `${this.aspect}`);
  }

}
