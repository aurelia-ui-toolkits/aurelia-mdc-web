import { customElement, useView } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView('./mdc-icon-button-icon.html')
@customElement('mdc-icon-button-icon')
export class MdcIconButtonIcon {
  @bindable.booleanAttr
  on: boolean;
}
