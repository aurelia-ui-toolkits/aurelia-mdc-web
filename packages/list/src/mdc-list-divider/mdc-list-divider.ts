import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-list-divider.html'))
@customElement('mdc-list-divider')
export class MdcListDivider {
  @bindable.booleanAttr
  padded: boolean;

  @bindable.booleanAttr
  inset: boolean;
 }
