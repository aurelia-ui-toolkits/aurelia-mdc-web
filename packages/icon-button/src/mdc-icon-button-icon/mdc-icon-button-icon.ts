import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * Optional. Used as a toggle icon button element.
 * @selector mdc-icon-button-icon
 */
@useView(PLATFORM.moduleName('./mdc-icon-button-icon.html'))
@customElement('mdc-icon-button-icon')
export class MdcIconButtonIcon {
  /** Indicates an "on" toggle element */
  @bindable.booleanAttr
  on: boolean;

  /** Optional. Set a Material icon. */
  @bindable
  icon: string;
}
