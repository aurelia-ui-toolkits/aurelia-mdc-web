import { customElement, inlineView } from 'aurelia-framework';

/**
 * Optional. The main tappable area of the card. Typically contains most (or all) card content except mdc-card-actions.
 * Only applicable to cards that have a primary action that the main surface should trigger.
 * @selector mdc-card-primary-action
 */
@inlineView('<template class="mdc-card__primary-action" mdc-ripple><slot></slot></template>')
@customElement('mdc-card-primary-action')
export class MdcCardPrimaryAction {

}
