
import { IContainer } from '@aurelia/kernel';
import { MdcCircularProgress, IMdcCircularProgressElement } from './mdc-circular-progress';

export { MdcCircularProgress, IMdcCircularProgressElement };

export const CircularProgressConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcCircularProgress);
  }
};
