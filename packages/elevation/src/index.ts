import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcElevation } from './mdc-elevation';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-elevation')
  ]);
}
