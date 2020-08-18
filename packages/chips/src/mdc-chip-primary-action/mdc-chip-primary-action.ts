import { customElement, inject, useView, PLATFORM, View } from 'aurelia-framework';
import { closest } from '@material/dom/ponyfill';
import { IMdcChipSetElement } from '../mdc-chip-set/mdc-chip-set';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-primary-action.html'))
@customElement('mdc-chip-primary-action')
export class MdcChipPrimaryAction {
  constructor(public root: HTMLElement) { }

  role: string;

  attached() {
    const chipSet = (closest(this.root, '.mdc-chip-set') as IMdcChipSetElement)?.au.controller.viewModel;
    this.root.setAttribute('role', chipSet.filter ? 'checkbox' : (chipSet.choice ? 'radio' : 'button'));
  }

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
