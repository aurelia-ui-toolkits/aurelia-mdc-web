import { IContainer } from 'aurelia';
import { MdcFab } from './mdc-fab';
import { MdcFabIcon } from './mdc-fab-icon';
import { RippleConfiguration } from '../ripple';
import { EnhanceMdcFab } from './enhance-mdc-fab';

export { MdcFab } from './mdc-fab';

let registered = false;

export const FabConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcFab, MdcFabIcon, RippleConfiguration, EnhanceMdcFab);
    }
  }
};

