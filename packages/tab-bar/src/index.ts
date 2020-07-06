import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcTabBar } from './mdc-tab-bar';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-tab-bar'),
    PLATFORM.moduleName('./tab/mdc-tab'),
    PLATFORM.moduleName('./scroller/mdc-tab-scroller'),
    PLATFORM.moduleName('./indicator/mdc-tab-indicator'),
  ]);
}
