import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcTextField } from './mdc-text-field';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-text-field'),
    PLATFORM.moduleName('./icon/mdc-text-field-icon')
  ]);
}
