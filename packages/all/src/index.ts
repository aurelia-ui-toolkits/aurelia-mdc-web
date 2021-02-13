import { IContainer, DI } from '@aurelia/kernel';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';
import { CardConfiguration } from '@aurelia-mdc-web/card';
import { CheckboxConfiguration } from '@aurelia-mdc-web/checkbox';
import { CircularProgressConfiguration } from '@aurelia-mdc-web/circular-progress';
import { DataTableConfiguration } from '@aurelia-mdc-web/data-table';
import { DrawerConfiguration } from '@aurelia-mdc-web/drawer';
import { FormFieldConfiguration } from '@aurelia-mdc-web/form-field';
import { IconConfiguration } from '@aurelia-mdc-web/icon';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { TabBarConfiguration } from '@aurelia-mdc-web/tab-bar';
import { TopAppBarConfiguration } from '@aurelia-mdc-web/top-app-bar';
import { TypographyConfiguration } from '@aurelia-mdc-web/typography';

export const AllConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    return container.register(
      ButtonConfiguration, CardConfiguration, CheckboxConfiguration, CircularProgressConfiguration, DataTableConfiguration,
      DrawerConfiguration, FormFieldConfiguration,
      ListConfiguration, IconConfiguration, RippleConfiguration,
      TopAppBarConfiguration, TypographyConfiguration, TabBarConfiguration
    );
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  createContainer(): IContainer {
    return this.register(DI.createContainer());
  }
};
