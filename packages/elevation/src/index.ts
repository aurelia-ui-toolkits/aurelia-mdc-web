import { IContainer } from 'aurelia';
import { MdcElevation } from './mdc-elevation';

export { MdcElevation } from './mdc-elevation';

let registered = false;

export const ElevationConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcElevation);
    }
  }
};
