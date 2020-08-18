import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcLayoutGrid } from './mdc-layout-grid';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-layout-grid'),
    PLATFORM.moduleName('./mdc-layout-grid-inner'),
    PLATFORM.moduleName('./mdc-layout-grid-cell/mdc-layout-grid-cell')
  ]);
}
