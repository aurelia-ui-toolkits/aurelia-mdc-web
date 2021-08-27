import { FrameworkConfiguration, PLATFORM, bindingMode, EventSubscriber, CheckedObserver, ObserverLocator } from 'aurelia-framework';
import { MdcComponentAdapters } from '@aurelia-mdc-web/base';

export { MdcSegmentedButton } from './mdc-segmented-button';
export { MdcSegmentedButtonSegment, IMdcSegmentedButtonSegmentElement } from './mdc-segmented-button-segment/mdc-segmented-button-segment';

export function configure(config: FrameworkConfiguration) {
  config.container.get(MdcComponentAdapters).registerMdcElementConfig(segmentedButtonSegmentConfig);

  config.globalResources([
    PLATFORM.moduleName('./mdc-segmented-button'),
    PLATFORM.moduleName('./mdc-segmented-button-segment/mdc-segmented-button-segment'),
    PLATFORM.moduleName('./mdc-segmented-button-segment/enhance-mdc-segmented-button-segment')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}

const segmentedButtonSegmentConfig = {
  tagName: 'mdc-segmented-button-segment',
  properties: {
    checked: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element, _: string, observerLocator: ObserverLocator) {
        return new CheckedObserver(element, new EventSubscriber(['selected', 'unselected']), observerLocator);
      }
    }
  }
};
