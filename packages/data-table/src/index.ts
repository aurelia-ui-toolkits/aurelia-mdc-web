import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcDataTable } from './mdc-data-table';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-data-table'),
    PLATFORM.moduleName('./mdc-data-table-row')
  ]);

  config.aurelia.use
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/checkbox'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/linear-progress'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/select'));
}
