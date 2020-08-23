import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcImageList } from './mdc-image-list';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-image-list'),
    PLATFORM.moduleName('./mdc-image-list-item/mdc-image-list-item')
  ]);
}
