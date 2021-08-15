import { FrameworkConfiguration, PLATFORM, bindingMode, ValueAttributeObserver, EventSubscriber } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';
import { MdcDefaultTextFieldConfiguration } from './mdc-default-text-field-configuration';

export { MdcTextField, IMdcTextFieldElement } from './mdc-text-field';
export { IMdcTextFieldHelperLineElement } from './mdc-text-field-helper-line/mdc-text-field-helper-line';
export { MdcDefaultTextFieldConfiguration };

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: MdcDefaultTextFieldConfiguration) => void) {
  frameworkConfig.container.get(MdcComponentAdapters).registerMdcElementConfig(textFieldConfig);

  frameworkConfig.globalResources([
    PLATFORM.moduleName('./mdc-text-field'),
    PLATFORM.moduleName('./enhance-mdc-text-field'),
    PLATFORM.moduleName('./mdc-text-field-icon'),
    PLATFORM.moduleName('./mdc-text-field-helper-line/mdc-text-field-helper-line'),
    PLATFORM.moduleName('./mdc-text-field-helper-text/mdc-text-field-helper-text'),
    PLATFORM.moduleName('./mdc-text-field-character-counter')
  ]);

  frameworkConfig.aurelia
    .use
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/floating-label'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/line-ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/notched-outline'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));

  if (typeof callback === 'function') {
    const config = frameworkConfig.container.get(MdcDefaultTextFieldConfiguration);
    callback(config);
  }
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
