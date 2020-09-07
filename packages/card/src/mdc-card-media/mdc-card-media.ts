import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-card-media
 */
@useView(PLATFORM.moduleName('./mdc-card-media.html'))
@customElement('mdc-card-media')
export class MdcCardMedia {
  /**
   * Automatically scales the media area's height to equal its width.
   */
  @bindable.booleanAttr
  square: boolean;

  /**
   * Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio.
   */
  @bindable.booleanAttr
  wide: boolean;
}
