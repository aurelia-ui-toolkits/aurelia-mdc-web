import { strings } from '@material/select';
import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { FloatingLabelConfiguration } from '../floating-label';
import { LineRippleConfiguration } from '../line-ripple';
import { MdcSelect } from './mdc-select';
import { MdcSelectIcon } from './mdc-select-icon';
import { MdcSelectHelperText } from './mdc-select-helper-text/mdc-select-helper-text';
import { ListConfiguration } from '../list';
import { NotchedOutlineConfiguration } from '../notched-outline';
import { RippleConfiguration } from '../ripple';
import { MdcSelectValueObserver } from './mdc-select-value-observer';
import { MdcDefaultSelectConfiguration } from './mdc-default-select-configuration';

export { MdcSelect } from './mdc-select';
export type { IMdcSelectElement } from './mdc-select';
export type { IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';
export { MdcDefaultSelectConfiguration };

let configured = false;

export const SelectConfiguration = {
  register(container: IContainer): IContainer {
    if (configured) {
      return container;
    } else {
      AppTask.creating(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => el.tagName === 'MDC-SELECT' ? property === 'value' : false);
        nodeObserverLocator.useConfig('MDC-SELECT', 'value', { events: [strings.CHANGE_EVENT], type: MdcSelectValueObserver });
      }).register(container);
      configured = true;
      return container.register(MdcSelect, MdcSelectIcon, MdcSelectHelperText, ListConfiguration, FloatingLabelConfiguration, LineRippleConfiguration, NotchedOutlineConfiguration, RippleConfiguration);
    }
  },
  customize(optionsProvider: (config: MdcDefaultSelectConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcDefaultSelectConfiguration);
        optionsProvider(options);
        return SelectConfiguration.register(container);
      },
    };
  }
};

