import { MdcFloatingLabel } from './mdc-floating-label';
import { IContainer } from 'aurelia';

export { MdcFloatingLabel } from './mdc-floating-label';

let registered = false;

export const FloatingLabelConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcFloatingLabel);
    }
  }
};
