import { IContainer } from '@aurelia/kernel';
import { MdcBanner } from './mdc-banner';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';

export { MdcBanner };

let registered = false;

export const BannerConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcBanner, ButtonConfiguration);
    }
  }
};
