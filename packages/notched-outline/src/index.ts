import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcNotchedOutline } from './mdc-notched-outline';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-notched-outline')
  ]);
}
