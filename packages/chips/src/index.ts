import { FrameworkConfiguration, PLATFORM, bindingMode, ObserverLocator, CheckedObserver, EventSubscriber } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcChip } from './mdc-chip/mdc-chip';
export { MdcChipSet } from './mdc-chip-set/mdc-chip-set';
export { MdcChipAction } from './mdc-chip-action/mdc-chip-action';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(chipConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-chip/mdc-chip'),
    PLATFORM.moduleName('./mdc-chip-set/mdc-chip-set'),
    PLATFORM.moduleName('./mdc-chip-action/mdc-chip-action'),
    PLATFORM.moduleName('./mdc-chip-action/enhance-mdc-chip-action')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}

const chipConfig = {
  tagName: 'mdc-chip',
  properties: {
    checked: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element, _: string, observerLocator: ObserverLocator) {
        return new CheckedObserver(element, new EventSubscriber(['change']), observerLocator);
      }
    }
  }
};
