import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcCard } from './mdc-card';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-card'),
    PLATFORM.moduleName('./mdc-card-actions/mdc-card-actions'),
    PLATFORM.moduleName('./mdc-card-media/mdc-card-media'),
    PLATFORM.moduleName('./mdc-card-action-buttons'),
    PLATFORM.moduleName('./mdc-card-action-icons'),
    PLATFORM.moduleName('./mdc-card-primary-action')
  ]);
}
