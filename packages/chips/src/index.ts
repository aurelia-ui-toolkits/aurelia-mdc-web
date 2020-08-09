import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcChip } from './mdc-chip/mdc-chip';
export { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
export { MdcChipIcon } from './mdc-chip-icon/mdc-chip-icon';
export { MdcChipText } from './mdc-chip-text';
export { MdcChipCheckmark } from './mdc-chip-checkmark';
export { MdcChipPrimaryAction } from './mdc-chip-primary-action';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(chipSetConfig);
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(chipConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-chip/mdc-chip'),
    PLATFORM.moduleName('./mdc-chip-set/mdc-chip-set'),
    PLATFORM.moduleName('./mdc-chip-icon/mdc-chip-icon'),
    PLATFORM.moduleName('./mdc-chip-text'),
    PLATFORM.moduleName('./mdc-chip-checkmark'),
    PLATFORM.moduleName('./mdc-chip-primary-action')
  ]);

  // config.aurelia
  //   .use
  //   .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}

const chipSetConfig = {
  tagName: 'mdc-chip-set',
  properties: {
    // value: {
    //   defaultBindingMode: bindingMode.twoWay,
    //   getObserver(element: Element) {
    //     return new ValueAttributeObserver(element, 'value', new EventSubscriber(['change', 'input']));
    //   }
    // }
  }
};

const chipConfig = {
  tagName: 'mdc-chip',
  properties: {

  }
};
