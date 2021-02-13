import { customElement, bindable } from 'aurelia';
import { booleanAttr, defaultSlotProcessContent } from '@aurelia-mdc-web/base';
import { processContent } from '@aurelia/runtime-html';

/**
 * @selector mdc-card-media
 */
@customElement('mdc-card-media')
@processContent(defaultSlotProcessContent)
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
