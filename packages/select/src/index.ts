import { FrameworkConfiguration, PLATFORM, bindingMode, ValueAttributeObserver, EventSubscriber } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';
import { strings } from '@material/select';

export { MdcSelect, IMdcSelectElement } from './mdc-select';
export { IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(selectConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-select'),
    PLATFORM.moduleName('./mdc-select-icon'),
    PLATFORM.moduleName('./mdc-select-helper-text/mdc-select-helper-text')
  ]);
}

const selectConfig = {
  tagName: 'mdc-select',
  properties: {
    value: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element) {
        return new ValueAttributeObserver(element, 'value', new EventSubscriber([strings.CHANGE_EVENT]));
      }
    }
  }
};
