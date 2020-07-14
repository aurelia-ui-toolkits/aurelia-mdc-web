import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcDialog } from './mdc-dialog';
export { MdcDialogService, IMdcDialogOptions } from './mdc-dialog-service';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-dialog'),
    PLATFORM.moduleName('./mdc-dialog-actions'),
    PLATFORM.moduleName('./mdc-dialog-title'),
    PLATFORM.moduleName('./mdc-dialog-content')
  ]);
}
