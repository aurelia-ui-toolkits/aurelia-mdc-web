import { IContainer } from '@aurelia/kernel';
import { MdcSegmentedButton } from './mdc-segmented-button';
import { MdcSegmentedButtonSegment } from './mdc-segmented-button-segment/mdc-segmented-button-segment';
import { EnhanceMdcSegmentedButtonSegment } from './mdc-segmented-button-segment/enhance-mdc-segmented-button-segment';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { AppTask, CheckedObserver, IAttrMapper, NodeObserverLocator } from '@aurelia/runtime-html';

export { MdcSegmentedButton, MdcSegmentedButtonSegment };

let configured = false;

export const SegmentedButtonConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.beforeCreate(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => (el.getAttribute('as-element') ?? el.tagName).toUpperCase() === 'MDC-SEGMENTED-BUTTON' ? property === 'checked' : false);
        nodeObserverLocator.useConfig({ 'MDC-SEGMENTED-BUTTON': { checked: { events: ['change'], type: CheckedObserver } } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcSegmentedButton, MdcSegmentedButtonSegment, EnhanceMdcSegmentedButtonSegment, RippleConfiguration);
  }
};
