import { IContainer, DI } from '@aurelia/kernel';
import { ButtonConfiguration } from '@aurelia-mdc-web/button';
import { CardConfiguration } from '@aurelia-mdc-web/card';
import { CheckboxConfiguration } from '@aurelia-mdc-web/checkbox';
import { ChipsConfiguration } from '@aurelia-mdc-web/chips';
import { CircularProgressConfiguration } from '@aurelia-mdc-web/circular-progress';
import { DataTableConfiguration } from '@aurelia-mdc-web/data-table';
import { DialogConfiguration } from '@aurelia-mdc-web/dialog';
import { DrawerConfiguration } from '@aurelia-mdc-web/drawer';
import { FloatingLabelConfiguration } from '@aurelia-mdc-web/floating-label';
import { FormFieldConfiguration } from '@aurelia-mdc-web/form-field';
import { IconConfiguration } from '@aurelia-mdc-web/icon';
import { IconButtonConfiguration } from '@aurelia-mdc-web/icon-button';
import { LineRippleConfiguration } from '@aurelia-mdc-web/line-ripple';
import { ListConfiguration } from '@aurelia-mdc-web/list';
import { LookupConfiguration } from '@aurelia-mdc-web/lookup';
import { NotchedOutlineConfiguration } from '@aurelia-mdc-web/notched-outline';
import { RadioConfiguration } from '@aurelia-mdc-web/radio';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { SelectConfiguration } from '@aurelia-mdc-web/select';
import { SnackbarConfiguration } from '@aurelia-mdc-web/snackbar';
import { TabBarConfiguration } from '@aurelia-mdc-web/tab-bar';
import { TextFieldConfiguration } from '@aurelia-mdc-web/text-field';
import { TopAppBarConfiguration } from '@aurelia-mdc-web/top-app-bar';
import { TypographyConfiguration } from '@aurelia-mdc-web/typography';
import { MenuConfiguration } from '@aurelia-mdc-web/menu';
import { MenuSurfaceConfiguration } from '@aurelia-mdc-web/menu-surface';
import { ExpandableConfiguration } from '@aurelia-mdc-web/expandable';
import { ElevationConfiguration } from '@aurelia-mdc-web/elevation';
import { FabConfiguration } from '@aurelia-mdc-web/fab';

export const AllConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    return container.register(
      ButtonConfiguration, CardConfiguration, CheckboxConfiguration, ChipsConfiguration, CircularProgressConfiguration, DataTableConfiguration,
      DialogConfiguration, DrawerConfiguration, ElevationConfiguration, ExpandableConfiguration, FabConfiguration, FloatingLabelConfiguration,
      FormFieldConfiguration, IconButtonConfiguration, IconConfiguration, LineRippleConfiguration, ListConfiguration, LookupConfiguration,
      MenuConfiguration, MenuSurfaceConfiguration, NotchedOutlineConfiguration, RadioConfiguration, RippleConfiguration, SelectConfiguration,
      SnackbarConfiguration, TabBarConfiguration, TextFieldConfiguration, TopAppBarConfiguration, TypographyConfiguration,
    );
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  createContainer(): IContainer {
    return this.register(DI.createContainer());
  }
};
