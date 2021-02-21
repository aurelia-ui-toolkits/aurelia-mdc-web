import { MdcDefaultLookupConfiguration } from './mdc-lookup-configuration';
import { MdcLookup } from './mdc-lookup';
import { IContainer } from 'aurelia';

export { MdcLookup, IMdcLookupElement } from './mdc-lookup';

export const LookupConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcLookup);
  },
  customize(optionsProvider: (config?: MdcDefaultLookupConfiguration) => void) {
    return {
      register(container: IContainer): IContainer {
        const options = container.get(MdcDefaultLookupConfiguration);
        optionsProvider(options);
        return container.register(MdcLookup);
      },
    };
  }
};
