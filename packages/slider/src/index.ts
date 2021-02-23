import { events } from '@material/slider';
import { IContainer, AppTask, IAttrSyntaxTransformer, NodeObserverLocator } from 'aurelia';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcSlider } from './mdc-slider';

export { MdcSlider, IMdcSliderElement } from './mdc-slider';

let configured = false;

export const SliderConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.with(IContainer).beforeCreate().call(c => {
        const attrSyntaxTransformer = c.get(IAttrSyntaxTransformer);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrSyntaxTransformer.useTwoWay((el, property) => (el.getAttribute('as-element') ?? el.tagName).toUpperCase() === 'MDC-SLIDER' ? property === 'value' || property === 'valuestart' : false);
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
