import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';

/**
 * @selector mdc-card
 */
@customElement('mdc-card')
export class MdcCard {

  /**
   * Removes the shadow and displays a hairline stroke instead.
   */
  @bindable({ set: booleanAttr })
  outlined: boolean;
}
