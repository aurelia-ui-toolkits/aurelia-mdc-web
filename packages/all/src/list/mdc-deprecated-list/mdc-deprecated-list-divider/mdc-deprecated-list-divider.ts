import { booleanAttr } from '@aurelia-mdc-web/base';
import { customElement, bindable } from 'aurelia';
import template from './mdc-deprecated-list-divider.html?raw';

/**
 * Optional, for list divider element
 * @selector mdc-list-divider
 */
@customElement({ name: 'mdc-deprecated-list-divider', template })
export class MdcDeprecatedListDivider {
  /** To make a divider match the padding of list items */
  @bindable({ set: booleanAttr })
  padded: boolean;

  /** Increases the leading margin of the divider so that it does not intersect the avatar column */
  @bindable({ set: booleanAttr })
  inset: boolean;
}
