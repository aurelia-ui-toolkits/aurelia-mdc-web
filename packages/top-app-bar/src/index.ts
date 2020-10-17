import { IContainer, DI, IRegistry } from '@aurelia/kernel';
import { MdcTopAppBar } from './mdc-top-app-bar';
import { MdcTopAppBarRow } from './mdc-top-app-bar-row';
import { MdcTopAppBarTitle } from './mdc-top-app-bar-title';
import { MdcTopAppBarSection } from './mdc-top-app-bar-section/mdc-top-app-bar-section';
import { MdcTopAppBarFixedAdjust } from './mdc-top-app-bar-fixed-adjust';
import { MdcTopAppBarNavIcon } from './mdc-top-app-bar-nav-icon';
import { MdcTopAppBarActionItem } from './mdc-top-app-bar-action-item';

export { MdcTopAppBar, MdcTopAppBarRow, MdcTopAppBarTitle, MdcTopAppBarSection, MdcTopAppBarFixedAdjust, MdcTopAppBarNavIcon, MdcTopAppBarActionItem };

export const MdcTopAppBarRegistration = MdcTopAppBar as unknown as IRegistry;
export const MdcTopAppBarRowRegistration = MdcTopAppBarRow as unknown as IRegistry;
export const MdcTopAppBarTitleRegistration = MdcTopAppBarTitle as unknown as IRegistry;
export const MdcTopAppBarSectionRegistration = MdcTopAppBarSection as unknown as IRegistry;
export const MdcTopAppBarFixedAdjustRegistration = MdcTopAppBarFixedAdjust as unknown as IRegistry;
export const MdcTopAppBarNavIconRegistration = MdcTopAppBarNavIcon as unknown as IRegistry;
export const MdcTopAppBarActionItemRegistration = MdcTopAppBarActionItem as unknown as IRegistry;

export const DefaultResources: IRegistry[] = [
  MdcTopAppBar as unknown as IRegistry,
  MdcTopAppBarRow as unknown as IRegistry,
  MdcTopAppBarTitle as unknown as IRegistry,
  MdcTopAppBarSection as unknown as IRegistry,
  MdcTopAppBarFixedAdjust as unknown as IRegistry,
  MdcTopAppBarNavIcon as unknown as IRegistry,
  MdcTopAppBarActionItem as unknown as IRegistry
];

export const TopAppBarConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    return container.register(...DefaultResources);
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  createContainer(): IContainer {
    return this.register(DI.createContainer());
  }
};
