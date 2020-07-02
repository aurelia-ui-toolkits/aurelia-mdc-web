import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcFormField } from './mdc-form-field';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-form-field')
  ]);
}
