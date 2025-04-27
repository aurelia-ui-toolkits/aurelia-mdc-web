import { IContainer } from '@aurelia/kernel';
import { MdcButton } from './mdc-button';
import { MdcButtonLabel } from './mdc-button-label';
import { EnhanceMdcButton } from './enhance-mdc-button';

export { MdcButton, MdcButtonLabel };
let registered = false;

export const ButtonConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcButton, MdcButtonLabel, EnhanceMdcButton);
    }
  }
};
