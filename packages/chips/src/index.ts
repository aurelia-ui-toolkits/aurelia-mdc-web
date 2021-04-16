import { FrameworkConfiguration, PLATFORM, bindingMode, ObserverLocator, CheckedObserver, EventSubscriber } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';
import { strings } from '@material/chips/deprecated/chip/constants';

export { MdcChip } from './mdc-chip/mdc-chip';
export { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
export { MdcChipIcon } from './mdc-chip-icon/mdc-chip-icon';
export { MdcChipPrimaryAction } from './mdc-chip-primary-action/mdc-chip-primary-action';
export { MdcChipCheckmark } from './mdc-chip-checkmark';
export { MdcChipText } from './mdc-chip-text';
export { MdcChipTrailingAction } from './mdc-chip-trailing-action/mdc-chip-trailing-action';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(chipConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-chip/mdc-chip'),
    PLATFORM.moduleName('./mdc-chip-set/mdc-chip-set'),
    PLATFORM.moduleName('./mdc-chip-icon/mdc-chip-icon'),
    PLATFORM.moduleName('./mdc-chip-primary-action/mdc-chip-primary-action'),
    PLATFORM.moduleName('./mdc-chip-checkmark'),
    PLATFORM.moduleName('./mdc-chip-text'),
    PLATFORM.moduleName('./mdc-chip-trailing-action/mdc-chip-trailing-action'),
    PLATFORM.moduleName('./mdc-chip-trailing-action/enhance-mdc-chip-trailing-action')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}

const chipConfig = {
  tagName: 'mdc-chip',
  properties: {
    checked: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element, _: string, observerLocator: ObserverLocator) {
        return new CheckedObserver(element, new EventSubscriber([strings.SELECTION_EVENT]), observerLocator);
      }
    }
  }
};
