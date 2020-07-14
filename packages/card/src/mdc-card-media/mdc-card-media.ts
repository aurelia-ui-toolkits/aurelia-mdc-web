import { customElement, useView } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView('./mdc-card-media.html')
@customElement('mdc-card-media')
export class MdcCardMedia {
  @bindable.booleanAttr
  scale: boolean;

  @bindable.booleanAttr
  wide: boolean;
}
