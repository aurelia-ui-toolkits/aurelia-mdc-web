import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-icon-button-icon.html'))
@customElement('mdc-icon-button-icon')
export class MdcIconButtonIcon {
  @bindable.booleanAttr
  on: boolean;

  @bindable
  icon: string;
}
