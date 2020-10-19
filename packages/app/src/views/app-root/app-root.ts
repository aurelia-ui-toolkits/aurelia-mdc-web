import { MdcDrawer } from '@aurelia-mdc-web/drawer';
import { IMdcListActionEventDetail } from '@aurelia-mdc-web/list';
import { Router, NavRoute, inject, IRouter } from 'aurelia';
import { observable } from '@aurelia/runtime';
import { Home } from '../home/home';
import { Gettingstarted } from '../gettingstarted/gettingstarted';
import { Button } from '../button/button';
import { CircularProgress } from '../circular-progress/circular-progress';
import { Drawer } from '../drawer/drawer';
import { List } from '../list/list';
import { TopAppBar } from '../top-app-bar/top-app-bar';

@inject(Router)
export class AppRoot {
  constructor(@IRouter private router: IRouter) {
    this.router.addNav('main-nav', [
      { title: 'Home', route: Home, meta: { divider: true } },
      { title: 'Getting started', route: Gettingstarted, meta: { divider: true } },
      { title: 'Button', route: Button },
      // { title: 'Circular progress', route: CircularProgress },
      // { title: 'Drawer', route: Drawer },
      // { title: 'List', route: List },
      // { title: 'Top app bar', route: TopAppBar },
    ]);
  }

  @observable
  drawer: MdcDrawer;
  async drawerChanged() {
    await this.drawer.initialised;
    this.drawer.open = true;
  }

  get navRoutes(): NavRoute[] {
    return this.router.findNav('main-nav').routes;
  }

  navigateTo(detail: IMdcListActionEventDetail) {
    if (detail.data) {
      this.router.load((detail.data as NavRoute).link);
      if (this.drawer.type === 'modal') {
        this.drawer.toggle();
      }
    }
  }
}
