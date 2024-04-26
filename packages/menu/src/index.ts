import { IContainer } from 'aurelia';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { MdcMenu } from './mdc-menu';
import { MdcMenuSelectionGroup } from './mdc-menu-selection-group';
import { MdcMenuSelectionGroupIcon } from './mdc-menu-selection-group-icon';
import { MenuSurfaceConfiguration } from '@aurelia-mdc-web/menu-surface';

export { MdcMenu, IMdcMenuItemComponentEventDetail, IMdcMenuItemComponentEvent } from './mdc-menu';

let registered = false;

export const MenuConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcMenu, MdcMenuSelectionGroup, MdcMenuSelectionGroupIcon, ListConfiguration, MenuSurfaceConfiguration);
    }
  }
};
