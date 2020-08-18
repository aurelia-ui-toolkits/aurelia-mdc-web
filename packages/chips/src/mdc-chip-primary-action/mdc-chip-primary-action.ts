import { customElement, inject, useView, PLATFORM, View } from 'aurelia-framework';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-primary-action.html'))
@customElement('mdc-chip-primary-action')
export class MdcChipPrimaryAction {
  constructor(public root: HTMLElement) { }

  focus() {
    this.root.focus();
  }
}

export interface IMdcChipPrimaryActionElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcChipPrimaryAction;
    };
  };
}
