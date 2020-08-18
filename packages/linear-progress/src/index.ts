import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcLinearProgress } from './mdc-linear-progress';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-linear-progress')
  ]);
}
