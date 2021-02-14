import { IContainer } from 'aurelia';
import { MdcNotchedOutline } from './mdc-notched-outline';

export { MdcNotchedOutline } from './mdc-notched-outline';

export const NotchedOutlineConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcNotchedOutline);
  }
};
