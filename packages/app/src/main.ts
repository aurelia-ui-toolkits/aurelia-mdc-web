import Aurelia, { LoggerConfiguration, LogLevel } from 'aurelia';
import { SVGAnalyzer } from '@aurelia/runtime-html';
import { Root } from './views/root/root';
import { AllConfiguration as MaterialConfiguration, MdcValidationControllerFactory } from '@aurelia-mdc-web/all';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './styles/shared.scss';
import { Hljs } from './elements/hljs/hljs';
import { ApiViewer } from './views/api-viewer/api-viewer';
import { ExampleViewer } from './elements/example-viewer/example-viewer';
import { JsonValueConverter } from './converters/json';
import { ValidationHtmlConfiguration, ValidationTrigger } from '@aurelia/validation-html';
import { ValidationConfiguration } from '@aurelia/validation';
//  import { DefaultResources, HrefCustomAttribute } from '@aurelia/router';
import { CircularProgress } from './views/circular-progress/circular-progress';
import { ButtonExamples } from './views/button/button-examples';
import { CardExamples } from './views/card/card-examples';
import { CheckboxExamples } from './views/checkbox/checkbox-examples';
import { ChipsExamples } from './views/chips/chips-examples';
import { CircularProgressExamples } from './views/circular-progress/circular-progress-examples';
import { DataTableExamples } from './views/data-table/data-table-examples';
import { Home } from './views/home/home';
import { Chips } from './views/chips/chips';
import { GettingStarted } from './views/getting-started/getting-started';
import { Card } from './views/card/card';
import { Checkbox } from './views/checkbox/checkbox';
import { DataTable } from './views/data-table/data-table';
import { Dialog } from './views/dialog/dialog';
import { Drawer } from './views/drawer/drawer';
import { Elevation } from './views/elevation/elevation';
import { Expandable } from './views/expandable/expandable';
import { Fab } from './views/fab/fab';
import { FormField } from './views/form-field/form-field';
import { IconButton } from './views/icon-button/icon-button';
import { ImageList } from './views/image-list/image-list';
import { LayoutGrid } from './views/layout-grid/layout-grid';
import { LinearProgress } from './views/linear-progress/linear-progress';
import { List } from './views/list/list';
import { Lookup } from './views/lookup/lookup';
import { Menu } from './views/menu/menu';
import { MenuSurface } from './views/menu-surface/menu-surface';
import { Radio } from './views/radio/radio';
import { Ripple } from './views/ripple/ripple';
import { Select } from './views/select/select';
import { Slider } from './views/slider/slider';
import { Snackbar } from './views/snackbar/snackbar';
import { Switch } from './views/switch/switch';
import { TextField } from './views/text-field/text-field';
import { Tooltip } from './views/tooltip/tooltip';
import { TopAppBar } from './views/top-app-bar/top-app-bar';
import { Typography } from './views/typography/typography';
import { DialogExamples } from './views/dialog/dialog-examples';
import { DrawerExamples } from './views/drawer/drawer-examples';
import { ElevationExamples } from './views/elevation/elevation-examples';
import { ExpandableExamples } from './views/expandable/expandable-examples';
import { FabExamples } from './views/fab/fab-examples';
import { FormFieldExamples } from './views/form-field/form-field-examples';
import { IconButtonExamples } from './views/icon-button/icon-button-examples';
import { ImageListExamples } from './views/image-list/image-list-examples';
import { LayoutGridExamples } from './views/layout-grid/layout-grid-examples';
import { LinearProgressExamples } from './views/linear-progress/linear-progress-examples';
import { ListExamples } from './views/list/list-examples';
import { LookupExamples } from './views/lookup/lookup-examples';
import { MenuSurfaceExamples } from './views/menu-surface/menu-surface-examples';
import { MenuExamples } from './views/menu/menu-examples';
import { RadioExamples } from './views/radio/radio-examples';
import { RippleExamples } from './views/ripple/ripple-examples';
import { SelectExamples } from './views/select/select-examples';
import { SliderExamples } from './views/slider/slider-examples';
import { SnackbarExamples } from './views/snackbar/snackbar-examples';
import { SwitchExamples } from './views/switch/switch-examples';
import { TabsExamples } from './views/tabs/tabs-examples';
import { TextFieldExamples } from './views/text-field/text-field-examples';
import { TooltipExamples } from './views/tooltip/tooltip-examples';
import { TopAppBarExamples } from './views/top-app-bar/top-app-bar-examples';
import { TypographyExamples } from './views/typography/typography-examples';
import { ButtonPage } from './views/button/button';
import { Tabs } from './views/tabs/tabs';
import { TreeView } from './views/tree-view/tree-view';
import { TreeViewExamples } from './views/tree-view/tree-view-examples';
import { Banner } from './views/banner/banner';
import { BannerExamples } from './views/banner/banner-examples';
import { SegmentedButton } from './views/segmented-button/segmented-button';
import { SegmentedButtonExamples } from './views/segmented-button/segmented-button-examples';
import { RouterConfiguration } from '@aurelia/router';
import { DialogContent } from './views/dialog/via-service/dialog-content';

// href is buggy
// DefaultResources.splice(DefaultResources.findIndex(x => x === HrefCustomAttribute as unknown as IRegistry));

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))
  .register(RouterConfiguration,
    MaterialConfiguration.customize(c => {
      c.tooltip.scrollHost = '.demo-panel-content';
    }), SVGAnalyzer,
    Hljs, ApiViewer, ExampleViewer, JsonValueConverter, LoggerConfiguration.create({ level: LogLevel.debug }),
    ValidationHtmlConfiguration.customize(o => {
      o.ValidationControllerFactoryType = MdcValidationControllerFactory;
      // o.DefaultTrigger = ValidationTrigger.changeOrBlur;
    }), ValidationConfiguration
  )
  .register(Home, GettingStarted, Banner, ButtonPage, Card, Checkbox, Chips, CircularProgress, DataTable, Dialog, Drawer, Elevation, Expandable, Fab, FormField,
    IconButton, ImageList, LayoutGrid, LinearProgress, List, Lookup, Menu, MenuSurface, Radio, Ripple, SegmentedButton, Select, Slider, Snackbar, Switch, Tabs, TextField,
    Tooltip, TopAppBar, TreeView, Typography)
  .register(BannerExamples, ButtonExamples, CardExamples, CheckboxExamples, ChipsExamples, CircularProgressExamples, DataTableExamples, DialogExamples, DrawerExamples,
    ElevationExamples, ExpandableExamples, FabExamples, FormFieldExamples, IconButtonExamples, ImageListExamples, LayoutGridExamples, LinearProgressExamples,
    ListExamples, LookupExamples, MenuExamples, MenuSurfaceExamples, RadioExamples, RippleExamples, SegmentedButtonExamples, SelectExamples, SliderExamples, SnackbarExamples,
    SwitchExamples, TabsExamples, TextFieldExamples, TooltipExamples, TopAppBarExamples, TreeViewExamples, TypographyExamples)
  .register(DialogContent)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Root)
  .start();
