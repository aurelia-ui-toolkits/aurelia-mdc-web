import { strings } from '@material/select';
import { IContainer, AppTask, IAttrSyntaxTransformer, NodeObserverLocator } from 'aurelia';
import { FloatingLabelConfiguration } from '@aurelia-mdc-web/floating-label';
import { LineRippleConfiguration } from '@aurelia-mdc-web/line-ripple';
import { MdcSelect } from './mdc-select';
import { MdcSelectIcon } from './mdc-select-icon';
import { MdcSelectHelperText } from './mdc-select-helper-text/mdc-select-helper-text';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { NotchedOutlineConfiguration } from '@aurelia-mdc-web/notched-outline';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { MdcSelectValueObserver } from './mdc-select-value-observer';

export { MdcSelect, IMdcSelectElement } from './mdc-select';
export { IMdcSelectHelperTextElement } from './mdc-select-helper-text/mdc-select-helper-text';

let configured = false;

export const SelectConfiguration = {
  register(container: IContainer): IContainer {
    if (!configured) {
      AppTask.with(IContainer).beforeCreate().call(c => {
        const attrSyntaxTransformer = c.get(IAttrSyntaxTransformer);
        const nodeObserverLocator = c.get(NodeObserverLocator);
        attrSyntaxTransformer.useTwoWay((el, property) => (el.getAttribute('as-element') ?? el.tagName).toUpperCase() === 'MDC-SELECT' ? property === 'value' : false);
        nodeObserverLocator.useConfig({ 'MDC-SELECT': { value: { events: [strings.CHANGE_EVENT], type:  MdcSelectValueObserver} } });
      }).register(container);
      configured = true;
    }
    return container.register(MdcSelect, MdcSelectIcon, MdcSelectHelperText, ListConfiguration,
      FloatingLabelConfiguration, LineRippleConfiguration, NotchedOutlineConfiguration, RippleConfiguration);
  }
};

// export function configure(config: FrameworkConfiguration) {
//   config.container.get(MdcComponentAdapters).registerMdcElementConfig(selectConfig);

//   config.globalResources([
//     PLATFORM.moduleName('./mdc-select'),
//     PLATFORM.moduleName('./mdc-select-icon'),
//     PLATFORM.moduleName('./mdc-select-helper-text/mdc-select-helper-text')
//   ]);

//   config.aurelia
//     .use
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/floating-label'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/line-ripple'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/notched-outline'))
//     .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
// }

// const selectConfig = {
//   tagName: 'mdc-select',
//   properties: {
//     value: {
//       defaultBindingMode: bindingMode.twoWay,
//       getObserver(element: Element) {
//         return new ValueAttributeObserver(element, 'value', new EventSubscriber([strings.CHANGE_EVENT]));
//       }
//     }
//   }
// };
