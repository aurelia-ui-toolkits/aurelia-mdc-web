
import { IContainer } from '@aurelia/kernel';
import { MdcCircularProgress } from './mdc-circular-progress';

export { MdcCircularProgress };

export const CircularProgressConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcCircularProgress);
  }
};
