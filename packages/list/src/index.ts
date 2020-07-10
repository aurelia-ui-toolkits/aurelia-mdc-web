import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcList } from './mdc-list';
export { MdcListItem, IMdcListItemElement } from './mdc-list-item/mdc-list-item';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-list'),
    PLATFORM.moduleName('./mdc-list-item/mdc-list-item'),
    PLATFORM.moduleName('./mdc-list-item-primary-text'),
    PLATFORM.moduleName('./mdc-list-item-secondary-text'),
    PLATFORM.moduleName('./mdc-list-item-graphic'),
    PLATFORM.moduleName('./mdc-list-item-meta'),
    PLATFORM.moduleName('./mdc-list-divider/mdc-list-divider'),
    PLATFORM.moduleName('./mdc-list-group'),
  ]);
}
