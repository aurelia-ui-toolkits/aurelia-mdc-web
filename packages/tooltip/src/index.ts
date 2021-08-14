import { PLATFORM, FrameworkConfiguration } from 'aurelia-framework';
import { MdcDefaultTooltipConfiguration } from './mdc-default-tooltip-configuration';

export { MdcTooltip } from './mdc-tooltip';
export { MdcTooltipAttribute } from './mdc-tooltip-attribute';
export { MdcDefaultTooltipConfiguration } from './mdc-default-tooltip-configuration';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: MdcDefaultTooltipConfiguration) => void) {
  frameworkConfig.globalResources([
    PLATFORM.moduleName('./mdc-tooltip'),
    PLATFORM.moduleName('./mdc-tooltip-attribute')
  ]);
  if (typeof callback === 'function') {
    const config = frameworkConfig.container.get(MdcDefaultTooltipConfiguration);
    callback(config);
  }
}
