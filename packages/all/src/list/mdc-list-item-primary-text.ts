import { customElement } from 'aurelia';

/**
 * Optional, primary text for the list item
 * @selector mdc-list-item-primary-text
 */
@customElement({
  name: 'mdc-list-item-primary-text',
  template: '<template class="mdc-list-item__primary-text"><au-slot></au-slot></template>'
})
export class MdcListItemPrimaryText { }
