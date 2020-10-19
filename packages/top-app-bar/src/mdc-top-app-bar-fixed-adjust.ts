import { customAttribute, inject } from 'aurelia';

@inject(Element)
@customAttribute('mdc-top-app-bar-fixed-adjust')
export class MdcTopAppBarFixedAdjust {
  constructor(private root: HTMLElement) { }

  value: 'prominent' | 'dense' | 'dense-prominent' | 'short';

  afterAttach() {
    this.root.classList.add(this.value ? `mdc-top-app-bar--${this.value}-fixed-adjust` : 'mdc-top-app-bar--fixed-adjust');
  }
}
