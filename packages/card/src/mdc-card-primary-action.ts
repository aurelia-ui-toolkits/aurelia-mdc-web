import { customElement, PLATFORM, useView } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * Optional. The main tappable area of the card. Typically contains most (or all) card content except mdc-card-actions.
 * Only applicable to cards that have a primary action that the main surface should trigger.
 * @selector mdc-card-primary-action
 */
@useView(PLATFORM.moduleName('./mdc-card-primary-action.html'))
@customElement('mdc-card-primary-action')
export class MdcCardPrimaryAction {

  /** Disables ripple effect */
  @bindable.booleanAttr
  disableRipple: boolean;
}
