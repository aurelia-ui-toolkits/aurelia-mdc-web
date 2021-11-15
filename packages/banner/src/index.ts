import { IContainer } from '@aurelia/kernel';
import { MdcBanner } from './mdc-banner';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';

export { MdcBanner };

export const BannerConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcBanner, ButtonConfiguration);
  }
};
