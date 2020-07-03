import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcDrawer } from './mdc-drawer';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-drawer'),
    PLATFORM.moduleName('./mdc-drawer-content'),
    PLATFORM.moduleName('./mdc-drawer-app-content'),
    PLATFORM.moduleName('./mdc-drawer-header/mdc-drawer-header'),
    PLATFORM.moduleName('./mdc-drawer-scrim')
  ]);
}
