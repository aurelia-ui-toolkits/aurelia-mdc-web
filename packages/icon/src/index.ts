import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcIcon } from './mdc-icon';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-icon')
  ]);
}
