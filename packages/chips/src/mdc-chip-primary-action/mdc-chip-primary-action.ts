import { customElement, inject } from 'aurelia';
import { closest } from '@material/dom/ponyfill';
import { MdcChipSet } from '../mdc-chip-set/mdc-chip-set';
import { processContent, CustomElement } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

/**
 * @hidden
 * @selector mdc-chip-primary-action
 */
@inject(Element)
@customElement('mdc-chip-primary-action')
@processContent(defaultSlotProcessContent)
export class MdcChipPrimaryAction {
  constructor(public root: HTMLElement) { }

  role: string;

  attached() {
    const chipSet = CustomElement.for<MdcChipSet>(closest(this.root, '.mdc-chip-set')!).viewModel;
    this.root.setAttribute('role', chipSet.filter ? 'checkbox' : (chipSet.choice ? 'radio' : 'button'));
  }

  focus() {
    this.root.focus();
  }
}

/** @hidden */
export interface IMdcChipPrimaryActionElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcChipPrimaryAction;
    };
  };
}
