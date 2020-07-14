import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcIconButton } from './mdc-icon-button';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-icon-button'),
    PLATFORM.moduleName('./mdc-icon-button-icon/mdc-icon-button-icon'),
    PLATFORM.moduleName('./enhance-mdc-icon-button')
  ]);
}
