import { customElement, bindable } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent, booleanAttr } from '@aurelia-mdc-web/base';

/**
 * Optional. The main tappable area of the card. Typically contains most (or all) card content except mdc-card-actions.
 * Only applicable to cards that have a primary action that the main surface should trigger.
 * @selector mdc-card-primary-action
 */
@customElement({ name: 'mdc-card-primary-action', template: '<template class="mdc-card__primary-action" mdc-ripple="disabled.bind: disableRipple"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcCardPrimaryAction {

  /** Disables ripple effect */
  @bindable({ set: booleanAttr })
  disableRipple: boolean;
}
