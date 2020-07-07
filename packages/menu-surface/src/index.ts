import { PLATFORM, FrameworkConfiguration } from 'aurelia-framework';

export { MdcMenuSurface } from './mdc-menu-surface';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-menu-surface'),
    PLATFORM.moduleName('./mdc-menu-surface-anchor')
  ]);
}
