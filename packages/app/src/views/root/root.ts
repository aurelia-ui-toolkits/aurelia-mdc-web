import { MdcDrawer } from '@aurelia-mdc-web/drawer';
import { IMdcListActionEventDetail } from '@aurelia-mdc-web/list';
// import { INavRoute } from 'aurelia';
import { observable } from '@aurelia/runtime';
import { IRouter, route } from '@aurelia/router';
import { Home } from '../home/home';
import { GettingStarted } from '../getting-started/getting-started';
import { Button } from '../button/button';
import { CircularProgress } from '../circular-progress/circular-progress';
import { Drawer } from '../drawer/drawer';
import { List } from '../list/list';

@route({
  routes: [
    { id: 'home', path: '', title: 'Home', component: Home, },
    { id: 'getting-started', title: 'Getting Started', component: GettingStarted },
    { id: 'button', title: 'Button', component: Button },
    { id: 'circular-progress', title: 'Circular progress', component: CircularProgress },
    { id: 'drawer', title: 'Drawer', component: Drawer },
    { id: 'list', title: 'List', component: List },
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
  async drawerChanged() {
    await this.drawer.initialised;
    this.drawer.open = true;
  }

  // get navRoutes(): INavRoute[] {
  //   return this.router.getRouteContext().('main-nav').routes;
  // }

  // navigateTo(detail: IMdcListActionEventDetail) {
  //   if (detail.data) {
  //     this.router.load((detail.data as INavRoute).link!);
  //     if (this.drawer.type === 'modal') {
  //       this.drawer.toggle();
  //     }
  //   }
  // }
}
