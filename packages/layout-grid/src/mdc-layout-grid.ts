import { customElement, useView, PLATFORM, inject } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

/**
 * @selector mdc-layout-grid
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-layout-grid.html'))
@customElement('mdc-layout-grid')
export class MdcLayoutGrid {
  constructor(private root: HTMLElement) { }

  /** Set grid alignment. Has no effect when the grid already fills its container. */
  @bindable.none
  position: 'left' | 'right';

  /** Specifies the grid should have fixed column width */
  @bindable.booleanAttr
  fixedColumnWidth: boolean;

  /** Specifies the grid should have no padding */
  @bindable.booleanAttr
  noPadding: boolean;

  /** Set desktop column width */
  @bindable.number
  desktopColumnWidth: string;
  desktopColumnWidthChanged() {
    this.root.style.setProperty('--mdc-layout-grid-column-width-desktop', `${this.desktopColumnWidth}px`);
  }

  /** Set tablet column width */
  @bindable.number
  tabletColumnWidth: string;
  tabletColumnWidthChanged() {
    this.root.style.setProperty('--mdc-layout-grid-column-width-tablet', `${this.tabletColumnWidth}px`);
  }

  /** Set phone column width */
  @bindable.number
  phoneColumnWidth: string;
  phoneColumnWidthChanged() {
    this.root.style.setProperty('--mdc-layout-grid-column-width-phone', `${this.phoneColumnWidth}px`);
  }

  /** Set all column widths at once */
  @bindable.number
  columnWidths: string;
  columnWidthsChanged() {
    [this.phoneColumnWidth, this.tabletColumnWidth, this.desktopColumnWidth] = this.columnWidths.split(' ');
  }

}
