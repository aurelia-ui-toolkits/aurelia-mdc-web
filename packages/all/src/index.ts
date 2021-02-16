import { IContainer, DI } from '@aurelia/kernel';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';
import { CardConfiguration } from '@aurelia-mdc-web/card';
import { CheckboxConfiguration } from '@aurelia-mdc-web/checkbox';
import { CircularProgressConfiguration } from '@aurelia-mdc-web/circular-progress';
import { DataTableConfiguration } from '@aurelia-mdc-web/data-table';
import { DrawerConfiguration } from '@aurelia-mdc-web/drawer';
import { FloatingLabelConfiguration } from '@aurelia-mdc-web/floating-label';
import { FormFieldConfiguration } from '@aurelia-mdc-web/form-field';
import { IconConfiguration } from '@aurelia-mdc-web/icon';
import { IconButtonConfiguration } from '@aurelia-mdc-web/icon-button';
import { LineRippleConfiguration } from '@aurelia-mdc-web/line-ripple';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { NotchedOutlineConfiguration } from '@aurelia-mdc-web/notched-outline';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { SelectConfiguration } from '@aurelia-mdc-web/select';
import { TabBarConfiguration } from '@aurelia-mdc-web/tab-bar';
import { TextFieldConfiguration } from '@aurelia-mdc-web/text-field';
import { TopAppBarConfiguration } from '@aurelia-mdc-web/top-app-bar';
import { TypographyConfiguration } from '@aurelia-mdc-web/typography';
import { MenuConfiguration } from '@aurelia-mdc-web/menu';
import { MenuSurfaceConfiguration } from '@aurelia-mdc-web/menu-surface';

export const AllConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    return container.register(
      ButtonConfiguration, CardConfiguration, CheckboxConfiguration, CircularProgressConfiguration, DataTableConfiguration,
      DrawerConfiguration, FloatingLabelConfiguration, FormFieldConfiguration, IconButtonConfiguration, IconConfiguration,
      LineRippleConfiguration, ListConfiguration, MenuConfiguration, MenuSurfaceConfiguration, NotchedOutlineConfiguration, RippleConfiguration,
      SelectConfiguration, TabBarConfiguration, TextFieldConfiguration, TopAppBarConfiguration, TypographyConfiguration,
    );
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  createContainer(): IContainer {
    return this.register(DI.createContainer());
  }
};
