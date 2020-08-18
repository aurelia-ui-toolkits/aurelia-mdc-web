import { customElement, useView, PLATFORM, inject } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-layout-grid.html'))
@customElement('mdc-layout-grid')
export class MdcLayoutGrid {
  constructor(private root: HTMLElement) { }

  @bindable
  position: 'left' | 'right';

  @bindable.booleanAttr
  fixedColumnWidth: boolean;

  @bindable.number
  desktopColumnWidth: string;
  desktopColumnWidthChanged(){
    this.root.style.setProperty('--mdc-layout-grid-column-width-desktop', `${this.desktopColumnWidth}px`);
  }

  @bindable.number
  tabletColumnWidth: string;
  tabletColumnWidthChanged(){
    this.root.style.setProperty('--mdc-layout-grid-column-width-tablet', `${this.tabletColumnWidth}px`);
  }

  @bindable.number
  phoneColumnWidth: string;
  phoneColumnWidthChanged(){
    this.root.style.setProperty('--mdc-layout-grid-column-width-phone', `${this.phoneColumnWidth}px`);
  }
}
