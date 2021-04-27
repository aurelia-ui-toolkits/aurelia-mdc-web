import { inlineView, customElement } from 'aurelia-framework';

/**
 * Optional, overline text for the list item
 * @selector mdc-list-item-overline-text
 */
@inlineView('<template class="mdc-list-item__overline-text"><slot></slot></template>')
@customElement('mdc-list-item-overline-text')
export class MdcListItemOverlineText { }
