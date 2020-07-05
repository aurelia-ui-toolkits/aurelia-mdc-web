import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcList } from './mdc-list';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-list'),
    PLATFORM.moduleName('./mdc-list-item/mdc-list-item')
  ]);
}
