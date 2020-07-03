import { inject, customElement, useView, PLATFORM, bindable } from 'aurelia-framework';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-drawer-header.html'))
@customElement('mdc-drawer-header')
export class MdcDrawerHeader {
  @bindable
  title: string;

  @bindable
  subtitle: string;
}
