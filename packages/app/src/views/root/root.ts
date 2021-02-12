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

@route({
  routes: [
    { id: 'home', path: '', title: 'Home', component: Home, data: { divider: 'true' } },
    { id: 'getting-started', title: 'Getting Started', component: GettingStarted, data: { divider: 'true' } },
    { id: 'button', title: 'Button', component: Button },
    { id: 'checkbox', title: 'Checkbox', component: Checkbox },
    { id: 'circular-progress', title: 'Circular progress', component: CircularProgress },
    { id: 'drawer', title: 'Drawer', component: Drawer },
    { id: 'list', title: 'List', component: List },
    { id: 'top-app-bar', title: 'Top app bar', component: TopAppBar },
    // { title: 'Top app bar', component: TopAppBar },
  ]
})
export class Root {
  constructor(@IRouter private router: IRouter) { }

  // static routes = [
  //   { title: 'Home', route: Home, meta: { divider: true } },
  //   { title: 'Getting Started', route: GettingStarted, meta: { divider: true } },
  //   { title: 'Button', route: Button },
  //   // { title: 'Circular progress', route: CircularProgress },
  //   // { title: 'Drawer', route: Drawer },
  //   // { title: 'List', route: List },
  //   // { title: 'Top app bar', route: TopAppBar },
  // ];

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
