import { customElement, inject, bindable, useView, PLATFORM } from 'aurelia-framework';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-primary-action.html'))
@customElement("mdc-chip-primary-action")
export class MdcChipPrimaryAction {
  @bindable role: string = "button";
  @bindable tabindex: number = 0;

  constructor(public root: HTMLElement) { }

  focus() {
    this.root.focus();
  }
}
