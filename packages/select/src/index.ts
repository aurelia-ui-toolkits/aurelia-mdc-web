import { strings } from '@material/select';
import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { FloatingLabelConfiguration } from '@aurelia-mdc-web/floating-label';
import { LineRippleConfiguration } from '@aurelia-mdc-web/line-ripple';
import { MdcSelect } from './mdc-select';
import { MdcSelectIcon } from './mdc-select-icon';
import { MdcSelectHelperText } from './mdc-select-helper-text/mdc-select-helper-text';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { NotchedOutlineConfiguration } from '@aurelia-mdc-web/notched-outline';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcSelectValueObserver } from './mdc-select-value-observer';
import { MdcDefaultSelectConfiguration } from './mdc-default-select-configuration';

export { MdcSelect, IMdcSelectElement } from './mdc-select';
export { IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';
export { MdcDefaultSelectConfiguration };

let configured = false;

export const SelectConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.beforeCreate(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => (el.getAttribute('as-element') ?? el.tagName).toUpperCase() === 'MDC-SELECT' ? property === 'value' : false);
        nodeObserverLocator.useConfig({ 'MDC-SELECT': { value: { events: [strings.CHANGE_EVENT], type: MdcSelectValueObserver } } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcSelect, MdcSelectIcon, MdcSelectHelperText, ListConfiguration,
      FloatingLabelConfiguration, LineRippleConfiguration, NotchedOutlineConfiguration, RippleConfiguration);
  },
  customize(optionsProvider: (config?: MdcDefaultSelectConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcDefaultSelectConfiguration);
        optionsProvider(options);
        return SelectConfiguration.register(container);
      },
    };
  }
};

