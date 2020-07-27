import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcTreeView } from './mdc-tree-view';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-tree-view')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'));
}
