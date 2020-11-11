import { FrameworkConfiguration, PLATFORM, bindingMode, ValueAttributeObserver, EventSubscriber, SelectValueObserver, ObserverLocator, InternalPropertyObserver } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';
import { strings } from '@material/select';
import { MdcSelectValueObserver } from './mdc-select-value-observer';

export { MdcSelect, IMdcSelectElement } from './mdc-select';
export { IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(selectConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-select'),
    PLATFORM.moduleName('./mdc-select-icon'),
    PLATFORM.moduleName('./mdc-select-helper-text/mdc-select-helper-text')
  ]);

  config.aurelia
    .use
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/floating-label'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/line-ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/notched-outline'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}

const selectConfig = {
  tagName: 'mdc-select',
  properties: {
    value: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element) {
        return new MdcSelectValueObserver(element, new EventSubscriber([strings.CHANGE_EVENT])) as unknown as InternalPropertyObserver;
      }
    }
  }
};
