import { IContainer } from 'aurelia';
import { MdcDefaultTooltipConfiguration } from './mdc-default-tooltip-configuration';
import { MdcTooltip } from './mdc-tooltip';
import { MdcTooltipAttribute } from './mdc-tooltip-attribute';

export { MdcTooltip } from './mdc-tooltip';
export { MdcTooltipAttribute } from './mdc-tooltip-attribute';

export const TooltipConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcTooltip, MdcTooltipAttribute);
  },
  customize(optionsProvider: (config?: MdcDefaultTooltipConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcDefaultTooltipConfiguration);
        optionsProvider(options);
        return container.register(MdcTooltip, MdcTooltipAttribute);
      },
    };
  }
};
