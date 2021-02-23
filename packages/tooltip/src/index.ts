import { IContainer } from 'aurelia';
import { MdcTooltip } from './mdc-tooltip';
import { MdcTooltipAttribute } from './mdc-tooltip-attribute';

export { MdcTooltip } from './mdc-tooltip';
export { MdcTooltipAttribute } from './mdc-tooltip-attribute';

export const TooltipConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcTooltip, MdcTooltipAttribute);
  }
};
