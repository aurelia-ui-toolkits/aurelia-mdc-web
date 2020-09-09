import { customElement, inlineView } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * Optional. The main tappable area of the card. Typically contains most (or all) card content except mdc-card-actions.
 * Only applicable to cards that have a primary action that the main surface should trigger.
 * @selector mdc-card-primary-action
 */
@inlineView('<template class="mdc-card__primary-action" mdc-ripple="disabled.bind: disableRipple"><slot></slot></template>')
@customElement('mdc-card-primary-action')
export class MdcCardPrimaryAction {

  /** Disables ripple effect */
  @bindable.booleanAttr
  disableRipple: boolean;
}
