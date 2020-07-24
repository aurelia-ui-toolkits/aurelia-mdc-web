import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-card.html'))
@customElement('mdc-card')
export class MdcCard {
  @bindable.booleanAttr
  outlined: boolean;
}
