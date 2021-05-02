import { IContainer, AppTask, IAttrSyntaxTransformer, NodeObserverLocator } from 'aurelia';
import { MdcSwitch } from './mdc-switch';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { CheckedObserver } from '@aurelia/runtime-html';

export { MdcSwitch, IMdcSwitchElement } from './mdc-switch';

let configured = false;

export const SwitchConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.beforeCreate(IContainer, c => {
        const attrSyntaxTransformer = c.get(IAttrSyntaxTransformer);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrSyntaxTransformer.useTwoWay((el, property) => el.tagName === 'MDC-SWITCH' ? property === 'checked' : false);
        nodeObserverLocator.useConfig({ 'MDC-SWITCH': { checked: { events: ['change'], type: CheckedObserver } } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcSwitch, RippleConfiguration);
  }
};
