
import { IContainer, DI, IRegistry } from '@aurelia/kernel';
import { MdcRipple } from './mdc-ripple';

export { MdcRipple };

export const MdcRippleRegistration = MdcRipple as unknown as IRegistry;

export const DefaultResources: IRegistry[] = [
  MdcRipple as unknown as IRegistry
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
