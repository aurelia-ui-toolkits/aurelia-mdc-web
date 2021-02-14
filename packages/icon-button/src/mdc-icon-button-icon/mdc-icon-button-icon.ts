import { customElement, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent, booleanAttr } from '@aurelia-mdc-web/base';

/**
 * Optional. Used as a toggle icon button element.
 * @selector mdc-icon-button-icon
 */
@customElement('mdc-icon-button-icon')
@processContent(defaultSlotProcessContent)
export class MdcIconButtonIcon {
  /** Indicates an "on" toggle element */
  @bindable({ set: booleanAttr })
  on: boolean;

  /** Optional. Set a Material icon. */
  @bindable
  icon: string;
}

/** @hidden */
export interface IMdcIconButtonIconElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcIconButtonIcon;
    };
  };
}
