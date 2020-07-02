import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcTextField } from './mdc-text-field';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-text-field'),
    PLATFORM.moduleName('./mdc-text-field-icon'),
    PLATFORM.moduleName('./mdc-text-field-helper-line'),
    PLATFORM.moduleName('./mdc-text-field-helper-text/mdc-text-field-helper-text'),
    PLATFORM.moduleName('./mdc-text-field-character-counter')
  ]);
}
