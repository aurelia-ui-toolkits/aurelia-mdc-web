import { MdcIconButtonIcon } from './mdc-icon-button-icon/mdc-icon-button-icon';
import { MdcIconButton } from './mdc-icon-button';
import { IContainer } from 'aurelia';
import { EnhanceMdcIconButton } from './enhance-mdc-icon-button';

export { MdcIconButton, MdcIconButtonIcon };

export const IconButtonConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcIconButton, MdcIconButtonIcon, EnhanceMdcIconButton);
  }
};
