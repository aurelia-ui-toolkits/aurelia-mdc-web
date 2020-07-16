import { FrameworkConfiguration, PLATFORM, bindingMode, ValueAttributeObserver, EventSubscriber } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';
import { strings } from '@material/slider';

export { MdcSlider, IMdcSliderElement } from './mdc-slider';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(checkboxConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-slider')
  ]);
}

const checkboxConfig = {
  tagName: 'mdc-slider',
  properties: {
    value: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element) {
        return new ValueAttributeObserver(element, 'value', new EventSubscriber([strings.CHANGE_EVENT, strings.INPUT_EVENT]));
      }
    }
  }
};
