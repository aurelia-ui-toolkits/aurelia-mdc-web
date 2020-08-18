import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcMenu, IMdcMenuItemComponentEventDetail, IMdcMenuItemComponentEvent } from './mdc-menu';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-menu'),
    PLATFORM.moduleName('./mdc-menu-selection-group'),
    PLATFORM.moduleName('./mdc-menu-selection-group-icon')
  ]);

  config.aurelia.use
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu-surface'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'));
}
