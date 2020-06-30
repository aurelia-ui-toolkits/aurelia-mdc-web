import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcFloatingLabel } from './mdc-floating-label';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-floating-label')
  ]);
}
