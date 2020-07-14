import { customElement, useView } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView('./mdc-card.html')
@customElement('mdc-card')
export class MdcCard {
  @bindable.booleanAttr
  outlined: boolean;
}
