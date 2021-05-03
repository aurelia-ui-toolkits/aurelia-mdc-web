import { MdcDrawer } from '@aurelia-mdc-web/drawer';
import { observable } from '@aurelia/runtime';
// import { IRouter, route, RouteDefinition } from '@aurelia/router';
import { Home } from '../home/home';
import { GettingStarted } from '../getting-started/getting-started';
import { Button } from '../button/button';
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
import { IRouter, routes, IRouteableComponent } from 'aurelia-direct-router';

@routes([
  { id: 'home', path: '', title: 'Home', component: Home, data: { divider: 'true' } },
  { path: 'getting-started', title: 'Getting Started', component: GettingStarted, data: { divider: 'true' } },
  { path: 'button', title: 'Button', component: Button },
  { path: 'card', title: 'Card', component: Card },
  { path: 'checkbox', title: 'Checkbox', component: Checkbox },
  { path: 'chips', title: 'Chips', component: Chips },
  { path: 'circular-progress', title: 'Circular progress', component: CircularProgress },
  { path: 'data-table', title: 'Data table', component: DataTable },
  { path: 'dialog', title: 'Dialog', component: Dialog },
  { path: 'drawer', title: 'Drawer', component: Drawer },
  { path: 'elevation', title: 'Elevation', component: Elevation },
  { path: 'expandable', title: 'Expandable', component: Expandable },
  { path: 'fab', title: 'Fab', component: Fab },
  { path: 'form-field', title: 'Form field', component: FormField },
  { path: 'icon-button', title: 'Icon button', component: IconButton },
  { path: 'image-list', title: 'Image list', component: ImageList },
  { path: 'layout-grid', title: 'Layout grid', component: LayoutGrid },
  { path: 'list', title: 'List', component: List },
  { path: 'linear-progress', title: 'Linear progress', component: LinearProgress },
  { path: 'lookup', title: 'Lookup', component: Lookup },
  { path: 'menu', title: 'Menu', component: Menu },
  { path: 'menu-surface', title: 'Menu surface', component: MenuSurface },
  { path: 'radio', title: 'Radio', component: Radio },
  { path: 'ripple', title: 'Ripple', component: Ripple },
  { path: 'select', title: 'Select', component: Select },
  { path: 'slider', title: 'Slider', component: Slider },
  { path: 'snackbar', title: 'Snackbar', component: Snackbar },
  { path: 'switch', title: 'Switch', component: Switch },
  { path: 'tabs', title: 'Tabs', component: Tabs },
  { path: 'text-field', title: 'Text field', component: TextField },
  { path: 'tooltip', title: 'Tooltip', component: Tooltip },
  { path: 'top-app-bar', title: 'Top app bar', component: TopAppBar },
  { path: 'typography', title: 'Typography', component: Typography },
])
export class Root implements IRouteableComponent {
  constructor(@IRouter private router: IRouter) { }

  githubSvg = githubSvg;

  @observable
  drawer: MdcDrawer;

  routes = [
    { id: 'home', path: '', title: 'Home', component: Home, data: { divider: 'true' } },
    { path: 'getting-started', title: 'Getting Started', component: GettingStarted, data: { divider: 'true' } },
    { path: 'button', title: 'Button', component: Button },
    { path: 'card', title: 'Card', component: Card },
    { path: 'checkbox', title: 'Checkbox', component: Checkbox },
    { path: 'chips', title: 'Chips', component: Chips },
    { path: 'circular-progress', title: 'Circular progress', component: CircularProgress },
    { path: 'data-table', title: 'Data table', component: DataTable },
    { path: 'dialog', title: 'Dialog', component: Dialog },
    { path: 'drawer', title: 'Drawer', component: Drawer },
    { path: 'elevation', title: 'Elevation', component: Elevation },
    { path: 'expandable', title: 'Expandable', component: Expandable },
    { path: 'fab', title: 'Fab', component: Fab },
    { path: 'form-field', title: 'Form field', component: FormField },
    { path: 'icon-button', title: 'Icon button', component: IconButton },
    { path: 'image-list', title: 'Image list', component: ImageList },
    { path: 'layout-grid', title: 'Layout grid', component: LayoutGrid },
    { path: 'list', title: 'List', component: List },
    { path: 'linear-progress', title: 'Linear progress', component: LinearProgress },
    { path: 'lookup', title: 'Lookup', component: Lookup },
    { path: 'menu', title: 'Menu', component: Menu },
    { path: 'menu-surface', title: 'Menu surface', component: MenuSurface },
    { path: 'radio', title: 'Radio', component: Radio },
    { path: 'ripple', title: 'Ripple', component: Ripple },
    { path: 'select', title: 'Select', component: Select },
    { path: 'slider', title: 'Slider', component: Slider },
    { path: 'snackbar', title: 'Snackbar', component: Snackbar },
    { path: 'switch', title: 'Switch', component: Switch },
    { path: 'tabs', title: 'Tabs', component: Tabs },
    { path: 'text-field', title: 'Text field', component: TextField },
    { path: 'tooltip', title: 'Tooltip', component: Tooltip },
    { path: 'top-app-bar', title: 'Top app bar', component: TopAppBar },
    { path: 'typography', title: 'Typography', component: Typography },
  ];

  attached() {
    this.drawer.open = true;
  }

  // get navRoutes(): (RouteDefinition | Promise<RouteDefinition>)[] {
  //   return this.router.routeTree.root.context.childRoutes;
  // }

  navigateTo(routeDef: any) {
    this.router.load(`${routeDef.path}/examples`);
    if (this.drawer.type === 'modal') {
      this.drawer.toggle();
    }
  }

}
