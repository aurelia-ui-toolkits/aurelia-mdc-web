import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export {MdcButton } from './mdc-button';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-button')
  ]);
}
