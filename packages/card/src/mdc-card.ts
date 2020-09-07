import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-card
 */
@useView(PLATFORM.moduleName('./mdc-card.html'))
@customElement('mdc-card')
export class MdcCard {

  /**
   * Removes the shadow and displays a hairline stroke instead.
   */
  @bindable.booleanAttr
  outlined: boolean;
}
