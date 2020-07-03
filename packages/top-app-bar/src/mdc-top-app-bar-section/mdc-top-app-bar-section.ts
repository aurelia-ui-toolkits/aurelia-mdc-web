import { customElement, useView, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-top-app-bar-section.html'))
@customElement('mdc-top-app-bar-section')
export class MdcTopAppBarSection {
  @bindable
  align: 'start' | 'end' = 'start';
}
