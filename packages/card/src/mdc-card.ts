import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-card.html?raw';

/**
 * @selector mdc-card
 */
@customElement({ name: 'mdc-card', template })
export class MdcCard {

  /**
   * Removes the shadow and displays a hairline stroke instead.
   */
  @bindable({ set: booleanAttr })
  outlined: boolean;
}
