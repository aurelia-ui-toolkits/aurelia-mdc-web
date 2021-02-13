import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';

/**
 * @selector mdc-card-actions
 */
@customElement('mdc-card-actions')
export class MdcCardActions {
  /**
   * Removes the action area's padding and causes its only child (an mdc-card__action element) to consume 100% of the action area's width.
   */
  @bindable({ set: booleanAttr })
  fullBleed: boolean;
}
