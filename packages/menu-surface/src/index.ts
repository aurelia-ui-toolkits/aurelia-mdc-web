import { MdcMenuSurface } from './mdc-menu-surface';
import { MdcMenuSurfaceAnchor } from './mdc-menu-surface-anchor';
import { IContainer } from 'aurelia';

export { MdcMenuSurface } from './mdc-menu-surface';

export const MenuSurfaceConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcMenuSurface, MdcMenuSurfaceAnchor);
  }
};
