import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcLineRipple } from './mdc-line-ripple';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-line-ripple')
  ]);
}
