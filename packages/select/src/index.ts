import { FrameworkConfiguration, PLATFORM, bindingMode, EventSubscriber, InternalPropertyObserver } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';
import { strings } from '@material/select';
import { MdcSelectValueObserver } from './mdc-select-value-observer';
import { MdcDefaultSelectConfiguration } from './mdc-default-select-configuration';

export { MdcSelect, IMdcSelectElement } from './mdc-select';
export { IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';
export { MdcDefaultSelectConfiguration };

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: MdcDefaultSelectConfiguration) => void) {
  frameworkConfig.container.get(MdcComponentAdapters).registerMdcElementConfig(selectConfig);

  frameworkConfig.globalResources([
    PLATFORM.moduleName('./mdc-select'),
    PLATFORM.moduleName('./mdc-select-icon'),
    PLATFORM.moduleName('./mdc-select-helper-text/mdc-select-helper-text')
  ]);

  frameworkConfig.aurelia
    .use
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/floating-label'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/line-ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/notched-outline'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));

    if (typeof callback === 'function') {
      const config = frameworkConfig.container.get(MdcDefaultSelectConfiguration);
      callback(config);
    }
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
