import { MdcDrawer } from '@aurelia-mdc-web/all';
import { observable } from '@aurelia/runtime';
import { Home } from '../home/home';
import { GettingStarted } from '../getting-started/getting-started';
import { ButtonPage } from '../button/button';
import { CircularProgress } from '../circular-progress/circular-progress';
import { Drawer } from '../drawer/drawer';
import { List } from '../list/list';
import { Checkbox } from '../checkbox/checkbox';
import { TopAppBar } from '../top-app-bar/top-app-bar';
import { Card } from '../card/card';
import { DataTable } from '../data-table/data-table';
import { IconButton } from '../icon-button/icon-button';
import { TextField } from '../text-field/text-field';
import { MenuSurface } from '../menu-surface/menu-surface';
import { Snackbar } from '../snackbar/snackbar';
import { Dialog } from '../dialog/dialog';
import { Menu } from '../menu/menu';
import { Select } from '../select/select';
import { Lookup } from '../lookup/lookup';
import { Chips } from '../chips/chips';
import { Elevation } from '../elevation/elevation';
import { Expandable } from '../expandable/expandable';
import { Fab } from '../fab/fab';
import { ImageList } from '../image-list/image-list';
import { LayoutGrid } from '../layout-grid/layout-grid';
import { LinearProgress } from '../linear-progress/linear-progress';
import { FormField } from '../form-field/form-field';
import { Radio } from '../radio/radio';
import { Ripple } from '../ripple/ripple';
import { Slider } from '../slider/slider';
import { Switch } from '../switch/switch';
import { Tooltip } from '../tooltip/tooltip';
import { Tabs } from '../tabs/tabs';
import { Typography } from '../typography/typography';
import githubSvg from '../../assets/github-circle-white-transparent.svg';
import { IRouter, IChildRouteConfig, ICurrentRoute } from '@aurelia/router';
import { TreeView } from '../tree-view/tree-view';
import { Banner } from '../banner/banner';
import { SegmentedButton } from '../segmented-button/segmented-button';
import { resolve } from 'aurelia';

export class Root {
  constructor(private router: IRouter = resolve(IRouter)) { }

  readonly currentRoute = resolve(ICurrentRoute);

  githubSvg = githubSvg;

  @observable
  drawer: MdcDrawer;

  static routes = [
    { id: 'home', path: 'home', title: 'Home', component: Home, data: { divider: 'true' } },
    { id: 'getting-started', path: 'getting-started', title: 'Getting Started', component: GettingStarted, data: { divider: 'true' } },
    { id: 'banner-page', path: 'banner-page', title: 'Banner', component: Banner },
    { id: 'button-page', path: 'button-page', title: 'Button', component: ButtonPage },
    { id: 'card', path: 'card', title: 'Card', component: Card },
    { id: 'checkbox', path: 'checkbox', title: 'Checkbox', component: Checkbox },
    { id: 'chips', path: 'chips', title: 'Chips', component: Chips },
    { id: 'circular-progress', path: 'circular-progress', title: 'Circular progress', component: CircularProgress },
    { id: 'data-table', path: 'data-table', title: 'Data table', component: DataTable },
    { id: 'dialog', path: 'dialog-page', title: 'Dialog', component: Dialog },
    { id: 'drawer', path: 'drawer', title: 'Drawer', component: Drawer },
    { id: 'elevation', path: 'elevation', title: 'Elevation', component: Elevation },
    { id: 'expandable', path: 'expandable', title: 'Expandable', component: Expandable },
    { id: 'fab', path: 'fab', title: 'Fab', component: Fab },
    { id: 'form-field', path: 'form-field', title: 'Form field', component: FormField },
    { id: 'icon-button', path: 'icon-button', title: 'Icon button', component: IconButton },
    { id: 'image-list', path: 'image-list', title: 'Image list', component: ImageList },
    { id: 'layout-grid', path: 'layout-grid', title: 'Layout grid', component: LayoutGrid },
    { id: 'list', path: 'list', title: 'List', component: List },
    { id: 'linear-progress', path: 'linear-progress', title: 'Linear progress', component: LinearProgress },
    { id: 'lookup', path: 'lookup', title: 'Lookup', component: Lookup },
    { id: 'menu', path: 'menu-page', title: 'Menu', component: Menu },
    { id: 'menu-surface', path: 'menu-surface', title: 'Menu surface', component: MenuSurface },
    { id: 'radio', path: 'radio', title: 'Radio', component: Radio },
    { id: 'ripple', path: 'ripple', title: 'Ripple', component: Ripple },
    { id: 'segmented-button', path: 'segmented-button-page', title: 'Segmented button', component: SegmentedButton },
    { id: 'select', path: 'select', title: 'Select', component: Select },
    { id: 'slider', path: 'slider', title: 'Slider', component: Slider },
    { id: 'snackbar', path: 'snackbar', title: 'Snackbar', component: Snackbar },
    { id: 'switch', path: 'switch', title: 'Switch', component: Switch },
    { id: 'tabs', path: 'tabs', title: 'Tabs', component: Tabs },
    { id: 'text-field', path: 'text-field', title: 'Text field', component: TextField },
    { id: 'tooltip', path: 'tooltip', title: 'Tooltip', component: Tooltip },
    { id: 'top-app', path: 'top-app-bar', title: 'Top app bar', component: TopAppBar },
    { id: 'tree-view', path: 'tree-view', title: 'Tree view', component: TreeView },
    { id: 'typography', path: 'typography', title: 'Typography', component: Typography },
  ];
  routes = Root.routes;

  attached() {
    this.drawer.open = true;
  }

  async navigateTo(route: IChildRouteConfig) {
    await this.router.load({ component: route.component });
    if (this.drawer.type === 'modal') {
      this.drawer.toggle();
    }
  }
}
