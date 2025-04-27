import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { MdcRadio } from './mdc-radio';
import { RippleConfiguration } from '../ripple';
import { CheckedObserver } from '@aurelia/runtime-html';

export { MdcRadio } from './mdc-radio';
export type {  IMdcRadioElement } from './mdc-radio';

let configured = false;

export const RadioConfiguration = {
  register(container: IContainer): IContainer {
    if (configured) {
      return container;
    } else {
      AppTask.creating(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-RADIO' ? property === 'checked' : false);
        nodeObserverLocator.useConfig('MDC-RADIO', 'checked', { events: ['change'], type: CheckedObserver });
      }).register(container);
      configured = true;
      return container.register(MdcRadio, RippleConfiguration);
    }
  }
};
