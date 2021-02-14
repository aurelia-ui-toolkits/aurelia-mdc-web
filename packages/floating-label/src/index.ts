import { MdcFloatingLabel } from './mdc-floating-label';
import { IContainer } from 'aurelia';

export { MdcFloatingLabel } from './mdc-floating-label';

export const FloatingLabelConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcFloatingLabel);
  }
};
