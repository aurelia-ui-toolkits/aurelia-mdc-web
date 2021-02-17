import { IContainer } from 'aurelia';
import { MdcSnackbar } from './mdc-snackbar';
import { MdcSnackbarService } from './mdc-snackbar-service';

export { MdcSnackbar } from './mdc-snackbar';
export { MdcSnackbarService, ISnackbarOptions } from './mdc-snackbar-service';

export const SnackbarConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcSnackbar, MdcSnackbarService);
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
