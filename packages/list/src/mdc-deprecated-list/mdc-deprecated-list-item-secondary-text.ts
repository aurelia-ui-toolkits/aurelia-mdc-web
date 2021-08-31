import { inlineView, customElement } from 'aurelia-framework';

/**
 * Optional, secondary text for the list item. Displayed below the primary text.
 * @selector mdc-deprecated-list-item-secondary-text
 */
@inlineView('<template class="mdc-deprecated-list-item__secondary-text"><slot></slot></template>')
@customElement('mdc-deprecated-list-item-secondary-text')
export class MdcDeprecatedListItemPrimaryText { }
