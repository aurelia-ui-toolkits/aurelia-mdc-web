import { useView, PLATFORM, customElement } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@useView(PLATFORM.moduleName('./mdc-layout-grid-cell.html'))
@customElement('mdc-layout-grid-cell')
export class MdcLayoutGridCell {
  @bindable
  order: string;

  @bindable
  position: 'top' | 'middle' | 'bottom';

  @bindable
  span: string;

  @bindable
  desktopSpan: string;

  @bindable
  tabletSpan: string;

  @bindable
  phoneSpan: string;
}
