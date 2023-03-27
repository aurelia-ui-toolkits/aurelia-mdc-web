import { customElement } from 'aurelia';

/**
 * Optional, overline text for the list item
 * @selector mdc-list-item-overline-text
 */
@customElement({ name: 'mdc-list-item-overline-text', template: '<template class="mdc-list-item__overline-text"><au-slot></au-slot></template>' })
export class MdcListItemOverlineText { }
