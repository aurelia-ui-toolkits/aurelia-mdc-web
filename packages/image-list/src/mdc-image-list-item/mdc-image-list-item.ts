import { customElement, useView, PLATFORM, inject } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-image-list-item.html'))
@customElement('mdc-image-list-item')
export class MdcImageListItem {
  constructor(private root: HTMLElement) { }

  @bindable
  src: string;

  @bindable
  label: string;

  hasAspect: boolean;

  @bindable.number
  aspect: number;
  aspectChanged() {
    this.hasAspect = !isNaN(this.aspect);
    this.root.style.setProperty('--mdc-image-list-item-aspect', isNaN(this.aspect) ? '1' : `${this.aspect}`);
  }

}
