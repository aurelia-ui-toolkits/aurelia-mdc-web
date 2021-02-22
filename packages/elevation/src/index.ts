import { IContainer } from 'aurelia';
import { MdcElevation } from './mdc-elevation';

export { MdcElevation } from './mdc-elevation';

export const ElevationConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcElevation);
  }
};
