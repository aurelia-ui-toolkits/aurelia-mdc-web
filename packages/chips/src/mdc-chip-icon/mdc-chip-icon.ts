import { customElement, inject, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent, booleanAttr } from '@aurelia-mdc-web/base';

let chipSetIcon = 0;

/**
 * Optional. Indicates an icon in the chip.
 * Added implicitly if mdc-chip[leading-icon] or mdc-chip[trailing-icon] are set.
 * @selector mdc-chip-icon
 */
@inject(Element)
@customElement('mdc-chip-icon')
@processContent(defaultSlotProcessContent)
export class MdcChipIcon {
  constructor(public root: HTMLElement) {
    this.root.setAttribute('id', this.id);
  }

  id: string = `mdc-chip-icon-${++chipSetIcon}`;

  /** Indicates that the icon is before the primary action. */
  @bindable({ set: booleanAttr })
  leading: boolean;

  /** Indicates that the icon is after the primary action. */
  @bindable({ set: booleanAttr })
  trailing: boolean;
}

/** @hidden */
export interface IMdcChipIconElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcChipIcon;
    };
  };
}
