import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-button.html'))
@customElement('mdc-button')
export class MdcButton {
  @bindable.booleanAttr
  touch: boolean;

  @bindable.booleanAttr
  raised: boolean;

  @bindable.booleanAttr
  unelevated: boolean;

  @bindable.booleanAttr
  outlined: boolean;
}
