import { IContainer } from 'aurelia';
import { MdcSnackbar } from './mdc-snackbar';
import { MdcSnackbarService } from './mdc-snackbar-service';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';
import { IconButtonConfiguration } from '@aurelia-mdc-web/icon-button';

export { MdcSnackbar } from './mdc-snackbar';
export { MdcSnackbarService, ISnackbarOptions } from './mdc-snackbar-service';

export const SnackbarConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcSnackbar, MdcSnackbarService, ButtonConfiguration, IconButtonConfiguration);
  }
};

// export function configure(config: FrameworkConfiguration) {
//   config.globalResources([
//     PLATFORM.moduleName('./mdc-snackbar')
//   ]);

//   config.aurelia.use
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'));
// }
