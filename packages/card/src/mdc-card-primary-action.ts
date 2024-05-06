import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-card-primary-action.html';

/**
 * Optional. The main tappable area of the card. Typically contains most (or all) card content except mdc-card-actions.
 * Only applicable to cards that have a primary action that the main surface should trigger.
 * @selector mdc-card-primary-action
 */
@customElement({ name: 'mdc-card-primary-action', template })
export class MdcCardPrimaryAction {

  /** Disables ripple effect */
  @bindable({ set: booleanAttr })
  disableRipple: boolean;
}
