import { FrameworkConfiguration, PLATFORM, bindingMode, EventSubscriber, ValueAttributeObserver } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcSwitch, IMdcSwitchElement } from './mdc-switch';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(switchConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-switch'),
    PLATFORM.moduleName('./enhance-mdc-switch')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}

const switchConfig = {
  tagName: 'mdc-switch',
  properties: {
    selected: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element) {
        return new ValueAttributeObserver(element, 'selected', new EventSubscriber(['change']));
      }
    }
  }
};
