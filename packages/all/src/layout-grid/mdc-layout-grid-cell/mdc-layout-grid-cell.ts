import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-layout-grid-cell.html?raw';

/**
 * @selector mdc-layout-grid-cell
 */
@customElement({ name: 'mdc-layout-grid-cell', template })
export class MdcLayoutGridCell {
  /** Optional, specifies the order of the cell */
  @bindable()
  order: string;

  /** Optional, specifies the alignment of cell */
  @bindable()
  position: 'top' | 'middle' | 'bottom';

  /** Optional, specifies the number of columns the cell spans */
  @bindable()
  span: string;

  /** Optional, specifies the number of columns the cell spans on a desktop */
  @bindable()
  desktopSpan: string;

  /** Optional, specifies the number of columns the cell spans on a tablet */
  @bindable()
  tabletSpan: string;

  /** Optional, specifies the number of columns the cell spans on a phone */
  @bindable()
  phoneSpan: string;

  @bindable({ set: booleanAttr })
  newRow: string;

  /** Optional, specifies the number of columns the cell spans for all screen sizes */
  @bindable()
  spans: string;
  spansChanged() {
    [this.phoneSpan, this.tabletSpan, this.desktopSpan] = this.spans.split(' ');
  }

  bound() {
    if (this.spans !== undefined) {
      this.spansChanged();
    }
  }
}
