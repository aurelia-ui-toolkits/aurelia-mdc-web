import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-card-actions.html?raw';

/**
 * @selector mdc-card-actions
 */
@customElement({ name: 'mdc-card-actions', template })
export class MdcCardActions {
  /**
   * Removes the action area's padding and causes its only child (an mdc-card__action element) to consume 100% of the action area's width.
   */
  @bindable({ set: booleanAttr })
  fullBleed: boolean;
}
