import { IContainer } from '@aurelia/kernel';
import { MdcIcon } from './mdc-icon';

export { MdcIcon };

let registered = false;

export const IconConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcIcon);
    }
  }
};
