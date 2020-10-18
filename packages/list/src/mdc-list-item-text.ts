import { customElement } from 'aurelia';

/**
 * Optional, primary text for the list item
 * @selector mdc-list-item-primary-text
 */
@customElement({
  name: 'mdc-list-item-text',
  template: '<template class="mdc-list-item__text"><slot></slot></template>'
})
export class MdcListItemText { }
