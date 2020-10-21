import { MdcDrawer } from '@aurelia-mdc-web/drawer';
import { IMdcListActionEventDetail } from '@aurelia-mdc-web/list';
import { INavRoute } from 'aurelia';
import { observable } from '@aurelia/runtime';
import { IRouter, IRouteableComponent } from '@aurelia/router';
import { Home } from '../home/home';
import { GettingStarted } from '../getting-started/getting-started';
import { Button } from '../button/button';
import { CircularProgress } from '../circular-progress/circular-progress';
import { Drawer } from '../drawer/drawer';
import { List } from '../list/list';

export class Root implements IRouteableComponent {
  constructor(@IRouter private router: IRouter) {
    this.router.addNav('main-nav', [
      { title: 'Home', route: Home, meta: { divider: true } },
      { title: 'Getting Started', route: GettingStarted, meta: { divider: true } },
      { title: 'Button', route: Button },
      { title: 'Circular progress', route: CircularProgress },
      { title: 'Drawer', route: Drawer },
      { title: 'List', route: List },
      // { title: 'Top app bar', route: TopAppBar },
    ]);
  }

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

  get navRoutes(): INavRoute[] {
    return this.router.findNav('main-nav').routes;
  }

  navigateTo(detail: IMdcListActionEventDetail) {
    if (detail.data) {
      this.router.load((detail.data as INavRoute).link!);
      if (this.drawer.type === 'modal') {
        this.drawer.toggle();
      }
    }
  }
}
