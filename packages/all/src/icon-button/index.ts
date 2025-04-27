import { MdcIconButtonIcon } from './mdc-icon-button-icon/mdc-icon-button-icon';
import { MdcIconButton } from './mdc-icon-button';
import { IContainer } from 'aurelia';
import { EnhanceMdcIconButton } from './enhance-mdc-icon-button';

export { MdcIconButton, MdcIconButtonIcon };

let registered = false;

export const IconButtonConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcIconButton, MdcIconButtonIcon, EnhanceMdcIconButton);
    }
  }
};
