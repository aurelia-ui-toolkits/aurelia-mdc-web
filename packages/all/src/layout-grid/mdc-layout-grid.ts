import { customElement, inject, bindable } from 'aurelia';
import { booleanAttr, number } from '../base';
import template from './mdc-layout-grid.html?raw';

/**
 * @selector mdc-layout-grid
 */
@inject(Element)
@customElement({ name: 'mdc-layout-grid', template })
export class MdcLayoutGrid {
  constructor(private root: HTMLElement) { }

  /** Set grid alignment. Has no effect when the grid already fills its container. */
  @bindable()
  position: 'left' | 'right';

  /** Specifies the grid should have fixed column width */
  @bindable({ set: booleanAttr })
  fixedColumnWidth: boolean;

  /** Specifies the grid should have no padding */
  @bindable({ set: booleanAttr })
  noPadding: boolean;

  /** Set desktop column width */
  @bindable({ set: number })
  desktopColumnWidth: string;
  desktopColumnWidthChanged() {
    this.root.style.setProperty('--mdc-layout-grid-column-width-desktop', `${this.desktopColumnWidth}px`);
  }

  /** Set tablet column width */
  @bindable({ set: number })
  tabletColumnWidth: string;
  tabletColumnWidthChanged() {
    this.root.style.setProperty('--mdc-layout-grid-column-width-tablet', `${this.tabletColumnWidth}px`);
  }

  /** Set phone column width */
  @bindable({ set: number })
  phoneColumnWidth: string;
  phoneColumnWidthChanged() {
    this.root.style.setProperty('--mdc-layout-grid-column-width-phone', `${this.phoneColumnWidth}px`);
  }

  /** Set all column widths at once */
  @bindable({ set: number })
  columnWidths: string;
  columnWidthsChanged() {
    [this.phoneColumnWidth, this.tabletColumnWidth, this.desktopColumnWidth] = this.columnWidths.split(' ');
  }

  bound() {
    if (this.columnWidths !== undefined) {
      this.columnWidthsChanged();
    }
    if (this.phoneColumnWidth !== undefined) {
      this.phoneColumnWidthChanged();
    }
    if (this.tabletColumnWidth !== undefined) {
      this.tabletColumnWidthChanged();
    }
    if (this.desktopColumnWidth !== undefined) {
      this.desktopColumnWidthChanged();
    }
  }
}
