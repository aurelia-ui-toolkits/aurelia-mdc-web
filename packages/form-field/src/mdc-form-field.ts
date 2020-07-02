import { inject, useView, customElement } from 'aurelia-framework';
import { cssClasses } from '@material/form-field';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView('./mdc-form-field.html')
@customElement(cssClasses.ROOT)
export class MdcFormField {
  cssClasses = cssClasses;

  @bindable.booleanAttr
  nowrap: boolean;

  @bindable.booleanAttr
  alignEnd: boolean;

  @bindable.booleanAttr
  spaceBetween: boolean;
}
