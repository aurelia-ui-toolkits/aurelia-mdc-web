import { MdcIconButtonIcon } from './mdc-icon-button-icon/mdc-icon-button-icon';
import { MdcIconButton } from './mdc-icon-button';
import { IContainer } from 'aurelia';

export { MdcIconButton, MdcIconButtonIcon };

export const IconButtonConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcIconButton, MdcIconButtonIcon);
  }
};
