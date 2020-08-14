import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-card-actions.html'))
@customElement('mdc-card-actions')
export class MdcCardActions {
  @bindable.booleanAttr
  fullBleed: boolean;
}
