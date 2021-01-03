import { PLATFORM, FrameworkConfiguration } from 'aurelia-framework';

export { MdcTooltip } from './mdc-tooltip';
export { MdcTooltipAttribute } from './mdc-tooltip-attribute';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-tooltip'),
    PLATFORM.moduleName('./mdc-tooltip-attribute')
  ]);
}
