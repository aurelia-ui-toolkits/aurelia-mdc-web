
import { IContainer } from '@aurelia/kernel';
import { MdcCircularProgress } from './mdc-circular-progress';

export { MdcCircularProgress };

let registered = false;

export const CircularProgressConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcCircularProgress);
    }
  }
};
