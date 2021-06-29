import { strings } from '@material/chips/deprecated/chip/constants';
import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { MdcChip } from './mdc-chip/mdc-chip';
import { CheckedObserver } from '@aurelia/runtime-html';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcChipIcon } from './mdc-chip-icon/mdc-chip-icon';
import { MdcChipPrimaryAction } from './mdc-chip-primary-action/mdc-chip-primary-action';
import { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
import { MdcChipTrailingAction } from './mdc-chip-trailing-action/mdc-chip-trailing-action';
import { MdcChipCheckmark } from './mdc-chip-checkmark';
import { MdcChipText } from './mdc-chip-text';

export { MdcChip } from './mdc-chip/mdc-chip';
export { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
export { MdcChipIcon } from './mdc-chip-icon/mdc-chip-icon';
export { MdcChipPrimaryAction } from './mdc-chip-primary-action/mdc-chip-primary-action';
export { MdcChipCheckmark } from './mdc-chip-checkmark';
export { MdcChipText } from './mdc-chip-text';
export { MdcChipTrailingAction } from './mdc-chip-trailing-action/mdc-chip-trailing-action';

let configured = false;

export const ChipsConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.beforeCreate(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-CHIP' ? property === 'checked' : false);
        nodeObserverLocator.useConfig({ 'MDC-CHIP': { checked: { events: [strings.SELECTION_EVENT], type: CheckedObserver } } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcChip, MdcChipIcon, MdcChipPrimaryAction, MdcChipSet, MdcChipTrailingAction, MdcChipCheckmark, MdcChipText,
      RippleConfiguration);
  }
};
