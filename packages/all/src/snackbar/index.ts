import { IContainer } from 'aurelia';
import { MdcSnackbar } from './mdc-snackbar';
import { MdcSnackbarService } from './mdc-snackbar-service';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';
import { IconButtonConfiguration } from '@aurelia-mdc-web/icon-button';

export { MdcSnackbar } from './mdc-snackbar';
export type { ISnackbarOptions } from './mdc-snackbar-service';
export { MdcSnackbarService } from './mdc-snackbar-service';

let registered = false;

export const SnackbarConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcSnackbar, MdcSnackbarService, ButtonConfiguration, IconButtonConfiguration);
    }
  }
};
