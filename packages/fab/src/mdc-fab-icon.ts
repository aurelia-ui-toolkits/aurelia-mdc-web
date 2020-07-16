import { inject, customAttribute } from "aurelia-framework";

@inject(Element)
@customAttribute('mdc-fab-icon')
export class MdcFabIcon {
  constructor(private root: HTMLElement) { }

  attached() {
    this.root.classList.add('mdc-fab__icon');
  }
}
