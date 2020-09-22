import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

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

  /** Increases the leading margin of the divider so that it does not intersect the avatar column */
  @bindable.booleanAttr
  inset: boolean;
 }
