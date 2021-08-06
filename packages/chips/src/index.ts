import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { MdcChip } from './mdc-chip/mdc-chip';
import { CheckedObserver } from '@aurelia/runtime-html';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcChipAction } from './mdc-chip-action/mdc-chip-action';
import { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
import { EnhanceMdcChipAction } from './mdc-chip-action/enhance-mdc-chip-action';

export { MdcChip } from './mdc-chip/mdc-chip';
export { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
export { MdcChipAction } from './mdc-chip-action/mdc-chip-action';

let configured = false;

export const ChipsConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.beforeCreate(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-CHIP' ? property === 'checked' : false);
        nodeObserverLocator.useConfig({ 'MDC-CHIP': { checked: { events: ['change'], type: CheckedObserver } } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcChip, MdcChipAction, EnhanceMdcChipAction, MdcChipSet, RippleConfiguration);
  }
};
