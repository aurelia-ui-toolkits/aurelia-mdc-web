import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-floating-label'),
    PLATFORM.moduleName('./mdc-line-ripple'),
    PLATFORM.moduleName('./mdc-textfield')
  ]);
}
