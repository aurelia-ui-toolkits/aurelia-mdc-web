import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-icon-button-icon.html';

/**
 * Optional. Used as a toggle icon button element.
 * @selector mdc-icon-button-icon
 */
@customElement({ name: 'mdc-icon-button-icon', template })
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
