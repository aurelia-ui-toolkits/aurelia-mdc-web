import { customElement } from 'aurelia';

/**
 * Optional, secondary text for the list item. Displayed below the primary text.
 * @selector mdc-deprecated-list-item-secondary-text
 */
@customElement({
  name: 'mdc-deprecated-list-item-secondary-text',
  template: '<template class="mdc-deprecated-list-item__secondary-text"><au-slot></au-slot></template>'
})
export class MdcDeprecatedListItemSecondaryText { }
