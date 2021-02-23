import { MdcDrawer } from '@aurelia-mdc-web/drawer';
import { observable } from '@aurelia/runtime';
import { IRouter, route, RouteDefinition } from '@aurelia/router';
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

@route({
  routes: [
    { id: 'home', path: 'home', title: 'Home', component: Home, data: { divider: 'true' } },
    { id: 'getting-started', title: 'Getting Started', component: GettingStarted, data: { divider: 'true' } },
    { id: 'button', title: 'Button', component: Button },
    { id: 'card', title: 'Card', component: Card },
    { id: 'checkbox', title: 'Checkbox', component: Checkbox },
    { id: 'chips', title: 'Chips', component: Chips },
    { id: 'circular-progress', title: 'Circular progress', component: CircularProgress },
    { id: 'data-table', title: 'Data table', component: DataTable },
    { id: 'dialog', title: 'Dialog', component: Dialog },
    { id: 'drawer', title: 'Drawer', component: Drawer },
    { id: 'elevation', title: 'Elevation', component: Elevation },
    { id: 'expandable', title: 'Expandable', component: Expandable },
    { id: 'fab', title: 'Fab', component: Fab },
    { id: 'form-field', title: 'Form field', component: FormField },
    { id: 'icon-button', title: 'Icon button', component: IconButton },
    { id: 'image-list', title: 'Image list', component: ImageList },
    { id: 'layout-grid', title: 'Layout grid', component: LayoutGrid },
    { id: 'list', title: 'List', component: List },
    { id: 'linear-progress', title: 'Linear progress', component: LinearProgress },
    { id: 'lookup', title: 'Lookup', component: Lookup },
    { id: 'menu', title: 'Menu', component: Menu },
    { id: 'menu-surface', title: 'Menu surface', component: MenuSurface },
    { id: 'radio', title: 'Radio', component: Radio },
    { id: 'ripple', title: 'Ripple', component: Ripple },
    { id: 'select', title: 'Select', component: Select },
    { id: 'slider', title: 'Slider', component: Slider },
    { id: 'snackbar', title: 'Snackbar', component: Snackbar },
    { id: 'switch', title: 'Switch', component: Switch },
    { id: 'text-field', title: 'Text field', component: TextField },
    { id: 'top-app-bar', title: 'Top app bar', component: TopAppBar },
  ]
})
export class Root {
  constructor(@IRouter private router: IRouter) { }

  @observable
  drawer: MdcDrawer;

  attached() {
    this.drawer.open = true;
  }

  get navRoutes(): (RouteDefinition | Promise<RouteDefinition>)[] {
    return this.router.routeTree.root.context.childRoutes;
  }

  navigateTo(routeDef: RouteDefinition) {
    this.router.load(`/${routeDef.id}`);
    if (this.drawer.type === 'modal') {
      this.drawer.toggle();
    }
  }

}
