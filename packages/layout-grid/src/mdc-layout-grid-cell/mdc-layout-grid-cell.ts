import { useView, PLATFORM, customElement } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-layout-grid-cell
 */
@useView(PLATFORM.moduleName('./mdc-layout-grid-cell.html'))
@customElement('mdc-layout-grid-cell')
export class MdcLayoutGridCell {
  /** Optional, specifies the order of the cell */
  @bindable
  order: string;

  /** Optional, specifies the alignment of cell */
  @bindable
  position: 'top' | 'middle' | 'bottom';

  /** Optional, specifies the number of columns the cell spans */
  @bindable
  span: string;

  /** Optional, specifies the number of columns the cell spans on a desktop */
  @bindable
  desktopSpan: string;

  /** Optional, specifies the number of columns the cell spans on a tablet */
  @bindable
  tabletSpan: string;

  /** Optional, specifies the number of columns the cell spans on a phone */
  @bindable
  phoneSpan: string;

  /** Optional, specifies the number of columns the cell spans for all screen sizes */
  @bindable
  spans: string;
  spansChanged() {
    [this.phoneSpan, this.tabletSpan, this.desktopSpan] = this.spans.split(' ');
  }
}
