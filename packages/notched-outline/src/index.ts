import { IContainer } from 'aurelia';
import { MdcNotchedOutline } from './mdc-notched-outline';

export { MdcNotchedOutline } from './mdc-notched-outline';

let registered = false;

export const NotchedOutlineConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcNotchedOutline);
    }
  }
};
