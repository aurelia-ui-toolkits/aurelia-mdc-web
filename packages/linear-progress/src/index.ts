import { IContainer } from 'aurelia';
import { MdcLinearProgress } from './mdc-linear-progress';

export { MdcLinearProgress } from './mdc-linear-progress';

let registered = false;

export const LinearProgressConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcLinearProgress);
    }
  }
};
