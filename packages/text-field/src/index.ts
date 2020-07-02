import { FrameworkConfiguration, PLATFORM, bindingMode, ValueAttributeObserver, EventSubscriber } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcTextField, IMdcTextFieldElement } from './mdc-text-field';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(textFieldConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-text-field'),
    PLATFORM.moduleName('./mdc-text-field-icon'),
    PLATFORM.moduleName('./mdc-text-field-helper-line'),
    PLATFORM.moduleName('./mdc-text-field-helper-text/mdc-text-field-helper-text'),
    PLATFORM.moduleName('./mdc-text-field-character-counter')
  ]);
}

const textFieldConfig = {
  tagName: 'mdc-text-field',
  properties: {
    value: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element) {
        return new ValueAttributeObserver(element, 'value', new EventSubscriber(['change', 'input']));
      }
    }
  }
};
