import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcListItemLeading } from '../mdc-list-item/mdc-list-item-leading';
import { MdcListItemTrailing } from '../mdc-list-item/mdc-list-item-trailing';

/**
 * Optional, for list divider element
 * @selector mdc-list-divider
 */
@useView(PLATFORM.moduleName('./mdc-list-divider.html'))
@customElement('mdc-list-divider')
export class MdcListDivider {
  /** To make a divider match the padding of list items */
  @bindable.booleanAttr
  padded: boolean;

  /** Aligns the divider’s leading edge with the item’s content block */
  @bindable
  leadingType: MdcListItemLeading['value'];

  /** Aligns the divider’s leading edge with the item’s trailing padding */
  @bindable
  trailingType: MdcListItemTrailing['value'];
 }
