import { MdcMenuSurface } from './mdc-menu-surface';
import { MdcMenuSurfaceAnchor } from './mdc-menu-surface-anchor';
import { IContainer } from 'aurelia';

export { MdcMenuSurface } from './mdc-menu-surface';

let registered = false;

export const MenuSurfaceConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcMenuSurface, MdcMenuSurfaceAnchor);
    }
  }
};
