import { booleanAttr } from '../../base';
import { customElement, bindable } from 'aurelia';
import { MdcListItemLeading } from '../mdc-list-item/mdc-list-item-leading';
import { MdcListItemTrailing } from '../mdc-list-item/mdc-list-item-trailing';
import template from './mdc-list-divider.html?raw';

/**
 * Optional, for list divider element
 * @selector mdc-list-divider
 */
@customElement({ name: 'mdc-list-divider', template })
export class MdcListDivider {
  /** To make a divider match the padding of list items */
  @bindable({ set: booleanAttr })
  padded: boolean;

  /** Aligns the divider’s leading edge with the item’s content block */
  @bindable()
  leadingType: MdcListItemLeading['value'];

  /** Aligns the divider’s leading edge with the item’s trailing padding */
  @bindable()
  trailingType: MdcListItemTrailing['value'];
}
