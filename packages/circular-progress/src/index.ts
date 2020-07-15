import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcCircularProgress, IMdcCircularProgressElement } from './mdc-circular-progress';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-circular-progress')
  ]);
}
