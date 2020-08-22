import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcSnackbar } from './mdc-snackbar';
export { MdcSnackbarService, ISnackbarOptions } from './mdc-snackbar-service';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-snackbar')
  ]);

  config.aurelia.use
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'));
}
