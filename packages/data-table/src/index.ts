import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcDataTable } from './mdc-data-table';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-data-table')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/checkbox'));
}
