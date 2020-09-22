import { inlineView, customElement } from 'aurelia-framework';

/**
 * Optional, secondary text for the list item. Displayed below the primary text.
 * @selector mdc-list-item-secondary-text
 */
@inlineView('<template class="mdc-list-item__secondary-text"><slot></slot></template>')
@customElement('mdc-list-item-secondary-text')
export class MdcListItemPrimaryText { }
