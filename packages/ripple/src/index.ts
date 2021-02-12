
import { IContainer } from '@aurelia/kernel';
import { MdcRipple, IMdcRippleElement } from './mdc-ripple';

export { MdcRipple, IMdcRippleElement };

export const RippleConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcRipple);
  }
};
