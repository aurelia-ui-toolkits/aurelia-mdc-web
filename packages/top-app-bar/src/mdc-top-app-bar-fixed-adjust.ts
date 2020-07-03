import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-top-app-bar-fixed-adjust')
export class MdcTopAppBarFixedAdjust {
  constructor(private root: HTMLElement) { }

  async attached() {
    this.root.classList.add('mdc-top-app-bar--fixed-adjust')
  }
}
