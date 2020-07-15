import { PLATFORM, FrameworkConfiguration } from 'aurelia-framework';

export { MdcRipple, IMdcRippleElement } from './mdc-ripple';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-ripple')
  ]);
}
