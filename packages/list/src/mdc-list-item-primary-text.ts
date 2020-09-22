import { inlineView, customElement } from 'aurelia-framework';

/**
 * Optional, primary text for the list item
 * @selector mdc-list-item-primary-text
 */
@inlineView('<template class="mdc-list-item__primary-text"><slot></slot></template>')
@customElement('mdc-list-item-primary-text')
export class MdcListItemPrimaryText { }
