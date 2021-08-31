import { inlineView, customElement } from 'aurelia-framework';

/**
 * Optional, primary text for the list item
 * @selector mdc-deprecated-list-item-primary-text
 */
@inlineView('<template class="mdc-deprecated-list-item__primary-text"><slot></slot></template>')
@customElement('mdc-deprecated-list-item-primary-text')
export class MdcDeprecatedListItemPrimaryText { }
