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

@route({
  routes: [
    { id: 'home', path: '', title: 'Home', component: Home, data: { divider: 'true' } },
    { id: 'getting-started', title: 'Getting Started', component: GettingStarted, data: { divider: 'true' } },
    { id: 'button', title: 'Button', component: Button },
    { id: 'card', title: 'Card', component: Card },
    { id: 'checkbox', title: 'Checkbox', component: Checkbox },
    { id: 'circular-progress', title: 'Circular progress', component: CircularProgress },
    { id: 'data-table', title: 'Data table', component: DataTable },
    { id: 'drawer', title: 'Drawer', component: Drawer },
    { id: 'icon-button', title: 'Icon button', component: IconButton },
    { id: 'list', title: 'List', component: List },
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
