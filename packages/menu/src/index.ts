import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcMenu } from './mdc-menu';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-menu')
  ]);
}
