import { IContainer } from 'aurelia';
import { MdcLayoutGridInner } from './mdc-layout-grid-inner';
import { MdcLayoutGridCell } from './mdc-layout-grid-cell/mdc-layout-grid-cell';
import { MdcLayoutGrid } from './mdc-layout-grid';

export { MdcLayoutGrid } from './mdc-layout-grid';

let registered = false;

export const LayoutGridConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcLayoutGrid, MdcLayoutGridInner, MdcLayoutGridCell);
    }
  }
};
