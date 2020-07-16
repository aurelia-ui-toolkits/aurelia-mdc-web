import { FrameworkConfiguration, PLATFORM, bindingMode, EventSubscriber, ObserverLocator, CheckedObserver } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcCheckbox, IMdcCheckboxElement } from './mdc-checkbox';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(checkboxConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-checkbox')
  ]);
}

const checkboxConfig = {
  tagName: 'mdc-checkbox',
  properties: {
    checked: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element, _: string, observerLocator: ObserverLocator) {
        return new CheckedObserver(element, new EventSubscriber(['change']), observerLocator);
      }
    }
  }
};
