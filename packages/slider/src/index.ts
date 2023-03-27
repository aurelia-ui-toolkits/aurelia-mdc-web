import { events } from '@material/slider';
import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcSlider } from './mdc-slider';

export { MdcSlider, IMdcSliderElement } from './mdc-slider';

let configured = false;

export const SliderConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.creating(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-SLIDER' ? property === 'value' || property === 'valuestart' : false);
        nodeObserverLocator.useConfig({
          'MDC-SLIDER': {
            value: { events: [events.CHANGE, events.INPUT] },
            valuestart: { events: [events.CHANGE, events.INPUT] }
          }
        });
      }).register(container);
      configured = true;
    }
    return container.register(MdcSlider, RippleConfiguration);
  }
};
