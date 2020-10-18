import { IContainer, DI } from '@aurelia/kernel';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';
import { DrawerConfiguration } from '@aurelia-mdc-web/drawer';
import { CircularProgressConfiguration } from '@aurelia-mdc-web/circular-progress';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { TopAppBarConfiguration } from '@aurelia-mdc-web/top-app-bar';

export const AllConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    return container.register(
      ButtonConfiguration, DrawerConfiguration, CircularProgressConfiguration, ListConfiguration, RippleConfiguration, TopAppBarConfiguration
    );
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  createContainer(): IContainer {
    return this.register(DI.createContainer());
  }
};
