import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-card-actions
 */
@useView(PLATFORM.moduleName('./mdc-card-actions.html'))
@customElement('mdc-card-actions')
export class MdcCardActions {
  /**
   * Removes the action area's padding and causes its only child (an mdc-card__action element) to consume 100% of the action area's width.
   */
  @bindable.booleanAttr
  fullBleed: boolean;
}
