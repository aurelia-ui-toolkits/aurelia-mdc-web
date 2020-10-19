import { IContainer } from '@aurelia/kernel';
import { MdcIcon } from './mdc-icon';

export { MdcIcon };

export const IconConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcIcon);
  }
};
