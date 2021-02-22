import { IContainer } from 'aurelia';
import { MdcLayoutGridInner } from './mdc-layout-grid-inner';
import { MdcLayoutGridCell } from './mdc-layout-grid-cell/mdc-layout-grid-cell';
import { MdcLayoutGrid } from './mdc-layout-grid';

export { MdcLayoutGrid } from './mdc-layout-grid';

export const LayoutGridConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcLayoutGrid, MdcLayoutGridInner, MdcLayoutGridCell);
  }
};
