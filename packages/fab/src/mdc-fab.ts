import { customElement, useView } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView('./mdc-fab.html')
@customElement('mdc-fab')
export class MdcFab {
  @bindable.booleanAttr
  mini: boolean;

  @bindable.booleanAttr
  extended: boolean;

  @bindable.booleanAttr
  touch: boolean;

  @bindable.booleanAttr
  exited: boolean;

  @bindable
  icon: string;

  @bindable
  label: string;
}
