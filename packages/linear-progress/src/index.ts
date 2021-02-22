import { IContainer } from 'aurelia';
import { MdcLinearProgress } from './mdc-linear-progress';

export { MdcLinearProgress } from './mdc-linear-progress';

export const LinearProgressConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcLinearProgress);
  }
};
