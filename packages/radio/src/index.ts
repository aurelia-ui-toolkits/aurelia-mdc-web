import { IContainer, AppTask, IAttrSyntaxTransformer, NodeObserverLocator } from 'aurelia';
import { MdcRadio } from './mdc-radio';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { CheckedObserver } from '@aurelia/runtime-html';

export { MdcRadio, IMdcRadioElement } from './mdc-radio';

let configured = false;

export const RadioConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.with(IContainer).beforeCreate().call(c => {
        const attrSyntaxTransformer = c.get(IAttrSyntaxTransformer);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrSyntaxTransformer.useTwoWay((el, property) => el.tagName === 'MDC-RADIO' ? property === 'checked' : false);
        nodeObserverLocator.useConfig({ 'MDC-RADIO': { checked: { events: ['change'], type: CheckedObserver } } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcRadio, RippleConfiguration);
  }
};
