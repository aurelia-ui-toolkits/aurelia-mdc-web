import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-card-media.html?raw';

/**
 * @selector mdc-card-media
 */
@customElement({ name: 'mdc-card-media', template })
export class MdcCardMedia {
  /**
   * Automatically scales the media area's height to equal its width.
   */
  @bindable({ set: booleanAttr })
  square: boolean;

  /**
   * Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio.
   */
  @bindable({ set: booleanAttr })
  wide: boolean;
}
