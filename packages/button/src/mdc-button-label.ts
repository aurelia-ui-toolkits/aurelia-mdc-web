import { inject, customAttribute } from 'aurelia-framework';

@inject(Element)
@customAttribute('mdc-button-label')
export class MdcButtonLabel {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-button__label');
  }
}
