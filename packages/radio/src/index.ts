import { FrameworkConfiguration, PLATFORM, bindingMode, EventSubscriber, CheckedObserver, ObserverLocator } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcRadio, IMdcRadioElement } from './mdc-radio';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(radioConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-radio')
  ]);
}

const radioConfig = {
  tagName: 'mdc-radio',
  properties: {
    checked: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element, _: string, observerLocator: ObserverLocator) {
        return new CheckedObserver(element, new EventSubscriber(['change']), observerLocator);
      }
    }
  }
};
