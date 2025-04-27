
import { IContainer } from '@aurelia/kernel';
import { MdcDrawer } from './mdc-drawer';
import { MdcDrawerContent } from './mdc-drawer-content';
import { MdcDrawerAppContent } from './mdc-drawer-app-content';
import { MdcDrawerHeader } from './mdc-drawer-header/mdc-drawer-header';

export { MdcDrawer, MdcDrawerContent, MdcDrawerAppContent, MdcDrawerHeader };

let registered = false;

export const DrawerConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcDrawer, MdcDrawerContent, MdcDrawerAppContent, MdcDrawerHeader);
    }
  }
};
