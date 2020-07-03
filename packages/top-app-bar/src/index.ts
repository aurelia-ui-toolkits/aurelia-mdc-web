import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcTopAppBar } from './mdc-top-app-bar';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-top-app-bar'),
    PLATFORM.moduleName('./mdc-top-app-bar-row'),
    PLATFORM.moduleName('./mdc-top-app-bar-title'),
    PLATFORM.moduleName('./mdc-top-app-bar-section/mdc-top-app-bar-section'),
    PLATFORM.moduleName('./mdc-top-app-bar-nav-icon'),
    PLATFORM.moduleName('./mdc-top-app-bar-action-item')
  ]);
}
