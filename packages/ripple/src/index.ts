
import { IContainer } from '@aurelia/kernel';
import { MdcRipple } from './mdc-ripple';

export { MdcRipple };

export const RippleConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcRipple);
  }
};
