
import { IContainer, DI, IRegistry } from '@aurelia/kernel';
import { MdcCircularProgress, IMdcCircularProgressElement } from './mdc-circular-progress';

export { MdcCircularProgress, IMdcCircularProgressElement };

export const MdcCircularProgressRegistration = MdcCircularProgress as unknown as IRegistry;

export const DefaultResources: IRegistry[] = [
  MdcCircularProgress as unknown as IRegistry
];

export const CircularProgressConfiguration = {
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
