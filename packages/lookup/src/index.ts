import { MdcDefaultLookupConfiguration } from './mdc-lookup-configuration';
import { MdcLookup } from './mdc-lookup';
import { IContainer } from 'aurelia';

export { MdcLookup } from './mdc-lookup';
export type { IMdcLookupElement } from './mdc-lookup';

let registered = false;

export const LookupConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcLookup);
    }
  },
  customize(optionsProvider: (config: MdcDefaultLookupConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcDefaultLookupConfiguration);
        optionsProvider(options);
        return LookupConfiguration.register(container);
      },
    };
  }
};
