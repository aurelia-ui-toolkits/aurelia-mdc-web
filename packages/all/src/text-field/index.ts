import { IContainer, AppTask, IAttrMapper, NodeObserverLocator } from 'aurelia';
import { MdcTextField } from './mdc-text-field';
import { MdcTextFieldIcon } from './mdc-text-field-icon';
import { MdcTextFieldHelperLine } from './mdc-text-field-helper-line/mdc-text-field-helper-line';
import { MdcTextFieldHelperText } from './mdc-text-field-helper-text/mdc-text-field-helper-text';
import { MdcTextFieldCharacterCounter } from './mdc-text-field-character-counter';
import { FloatingLabelConfiguration } from '../floating-label';
import { LineRippleConfiguration } from '../line-ripple';
import { NotchedOutlineConfiguration } from '../notched-outline';
import { RippleConfiguration } from '../ripple';
import { EnhanceMdcTextfield } from './enhance-mdc-text-field';
import { MdcDefaultTextFieldConfiguration } from './mdc-default-text-field-configuration';

export { MdcTextField } from './mdc-text-field';
export type { IMdcTextFieldElement } from './mdc-text-field';
export type { IMdcTextFieldHelperLineElement } from './mdc-text-field-helper-line/mdc-text-field-helper-line';
export { MdcDefaultTextFieldConfiguration };

let configured = false;

export const TextFieldConfiguration = {
  register(container: IContainer): IContainer {
    if (configured) {
      return container;
    } else {
      AppTask.creating(IContainer, c => {
        const attrMapper = c.get(IAttrMapper);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => el.hasAttribute('mdc-text-field-element') ? property === 'value' : false);
        nodeObserverLocator.useConfig('MDC-TEXT-FIELD', 'value', { events: ['input', 'change'] });
      }).register(container);
      configured = true;
      return container.register(MdcTextField, MdcTextFieldIcon, MdcTextFieldHelperLine, MdcTextFieldHelperText, MdcTextFieldCharacterCounter,
        FloatingLabelConfiguration, LineRippleConfiguration, NotchedOutlineConfiguration, RippleConfiguration, EnhanceMdcTextfield);
    }
  },
  customize(optionsProvider: (config: MdcDefaultTextFieldConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcDefaultTextFieldConfiguration);
        optionsProvider(options);
        return TextFieldConfiguration.register(container);
      },
    };
  }
};

