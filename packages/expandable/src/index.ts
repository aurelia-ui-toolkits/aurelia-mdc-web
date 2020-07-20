import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcExpandable } from './mdc-expandable';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-expandable'),
  ]);
}
