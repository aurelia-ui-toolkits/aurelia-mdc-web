
import { IContainer } from '@aurelia/kernel';
import { MdcRipple, IMdcRippleElement } from './mdc-ripple';

export { MdcRipple };
export type { IMdcRippleElement };

let registered = false;

export const RippleConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcRipple);
    }
  }
};
