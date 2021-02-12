import { IContainer, AppTask, IAttrSyntaxTransformer, NodeObserverLocator } from 'aurelia';
import { MdcCheckbox } from './mdc-checkbox';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';

export { MdcCheckbox, IMdcCheckboxElement } from './mdc-checkbox';

export const CheckboxConfiguration = {
  register(container: IContainer): IContainer {
    AppTask.with(IContainer).beforeCreate().call(c => {
      const attrSyntaxTransformer = c.get(IAttrSyntaxTransformer);
      const nodeObserverLocator = c.get(NodeObserverLocator);
      attrSyntaxTransformer.useTwoWay((el, property) => el.tagName === 'MDC-CHECKBOX' ? property === 'checked' : false);
      nodeObserverLocator.useConfig({ 'MDC-CHECKBOX': { checked: { events: ['change'] } } });
    }).register(container);
    return container.register(MdcCheckbox, RippleConfiguration);
  }
};
