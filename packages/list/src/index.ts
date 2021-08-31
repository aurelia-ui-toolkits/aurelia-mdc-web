import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcList, mdcListStrings, IMdcListElement } from './mdc-list';
export { MdcListItem, IMdcListItemElement, IMdcListActionEventDetail, IMdcListActionEvent } from './mdc-list-item/mdc-list-item';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-list'),
    PLATFORM.moduleName('./mdc-list-item/mdc-list-item'),
    PLATFORM.moduleName('./mdc-list-item/mdc-list-item-leading'),
    PLATFORM.moduleName('./mdc-list-item/mdc-list-item-trailing'),
    PLATFORM.moduleName('./mdc-list-item/enhance-mdc-list-item'),
    PLATFORM.moduleName('./mdc-list-item-overline-text'),
    PLATFORM.moduleName('./mdc-list-item-primary-text'),
    PLATFORM.moduleName('./mdc-list-item-secondary-text'),
    PLATFORM.moduleName('./mdc-list-divider/mdc-list-divider'),
    PLATFORM.moduleName('./mdc-list-group'),

    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-item-primary-text'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-item-secondary-text'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-item-graphic'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-item-meta'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider'),
    PLATFORM.moduleName('./mdc-deprecated-list/mdc-deprecated-list-group'),

  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}
