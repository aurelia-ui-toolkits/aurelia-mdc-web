import { IContainer } from '@aurelia/kernel';
import { BannerConfiguration } from './banner';
import { ButtonConfiguration } from './button';
import { CardConfiguration } from './card';
import { CheckboxConfiguration } from './checkbox';
import { ChipsConfiguration } from './chips';
import { CircularProgressConfiguration } from './circular-progress';
import { DataTableConfiguration } from './data-table';
import { DialogConfiguration } from './dialog';
import { DrawerConfiguration } from './drawer';
import { FloatingLabelConfiguration } from './floating-label';
import { FormFieldConfiguration } from './form-field';
import { IconConfiguration } from './icon';
import { IconButtonConfiguration } from './icon-button';
import { LineRippleConfiguration } from './line-ripple';
import { ListConfiguration } from './list';
import { LookupConfiguration } from './lookup';
import { NotchedOutlineConfiguration } from './notched-outline';
import { RadioConfiguration } from './radio';
import { RippleConfiguration } from './ripple';
import { SegmentedButtonConfiguration } from './segmented-button';
import { SelectConfiguration } from './select';
import { SnackbarConfiguration } from './snackbar';
import { TabBarConfiguration } from './tab-bar';
import { TextFieldConfiguration } from './text-field';
import { TopAppBarConfiguration } from './top-app-bar';
import { TypographyConfiguration } from './typography';
import { MenuConfiguration } from './menu';
import { MenuSurfaceConfiguration } from './menu-surface';
import { ExpandableConfiguration } from './expandable';
import { ElevationConfiguration } from './elevation';
import { FabConfiguration } from './fab';
import { ImageListConfiguration } from './image-list';
import { LayoutGridConfiguration } from './layout-grid';
import { LinearProgressConfiguration } from './linear-progress';
import { SliderConfiguration } from './slider';
import { SwitchConfiguration } from './switch';
import { TooltipConfiguration } from './tooltip';
import { BaseConfiguration } from './base';
import { TreeViewConfiguration } from './tree-view';

let registered = false; //

export const AllConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(
        BaseConfiguration, BannerConfiguration, ButtonConfiguration, CardConfiguration, CheckboxConfiguration, ChipsConfiguration, CircularProgressConfiguration,
        DataTableConfiguration, DialogConfiguration, DrawerConfiguration, ElevationConfiguration, ExpandableConfiguration, FabConfiguration,
        FloatingLabelConfiguration, FormFieldConfiguration, IconButtonConfiguration, IconConfiguration, ImageListConfiguration, LayoutGridConfiguration,
        LineRippleConfiguration, LinearProgressConfiguration, ListConfiguration, LookupConfiguration, MenuConfiguration, MenuSurfaceConfiguration,
        NotchedOutlineConfiguration, RadioConfiguration, RippleConfiguration, SegmentedButtonConfiguration, SelectConfiguration, SliderConfiguration,
        SnackbarConfiguration, SwitchConfiguration, TabBarConfiguration, TextFieldConfiguration, TooltipConfiguration, TopAppBarConfiguration,
        TreeViewConfiguration, TypographyConfiguration,
      );
    }
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  // createContainer(): IContainer {
  //   return this.register(DI.createContainer());
  // }
};
