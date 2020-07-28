import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-card-media.html'))
@customElement('mdc-card-media')
export class MdcCardMedia {
  @bindable.booleanAttr
  square: boolean;

  @bindable.booleanAttr
  wide: boolean;
}
