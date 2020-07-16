import { FrameworkConfiguration, PLATFORM, bindingMode, EventSubscriber, ObserverLocator, CheckedObserver } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcSwitch, IMdcSwitchElement } from './mdc-switch';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(switchConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-switch')
  ]);
}

const switchConfig = {
  tagName: 'mdc-switch',
  properties: {
    checked: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element, _: string, observerLocator: ObserverLocator) {
        return new CheckedObserver(element, new EventSubscriber(['change']), observerLocator);
      }
    }
  }
};
