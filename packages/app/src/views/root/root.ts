import { RouterConfiguration, RouteConfig, NavModel, Router } from 'aurelia-router';
import { autoinject, observable } from 'aurelia-framework';
import { MdcDrawer } from '@aurelia-mdc-web/drawer';
import { IMdcListActionEventDetail } from '@aurelia-mdc-web/list';

@autoinject
export class Root {
  constructor(private router: Router) { }

  navModels: NavModel[];

  @observable
  drawer: MdcDrawer;
  async drawerChanged() {
    await this.drawer.initialised;
    this.drawer.open = true;
  }

  configureRouter(config: RouterConfiguration) {
    const exampleRoutes: RouteConfig[] = ['button', 'card', 'checkbox', 'circular-progress', 'dialog', 'drawer', 'expandable', 'fab',
      'form-field', 'icon-button', 'list', 'lookup', 'menu', 'radio', 'ripple', 'select', 'slider', 'switch', 'tabs', 'text-field', 'top-app-bar',
      'typography']
      .map(x => ({ route: x }));

    const menuRoutes: RouteConfig[] = [
      { route: ['', 'home'], title: 'Home', name: 'home', divider: true },
      { route: 'getting-started', divider: true },
      ...exampleRoutes
    ];
    menuRoutes.forEach(x => {
      x.nav = true;
      x.name = x.name || x.route as string;
      x.moduleId = `views/${x.name}/${x.name}`;
      x.title = x.title || (x.route as string).split('-').map(x => `${x[0].toUpperCase()}${x.substring(1)}`).join(' ');
      x.tooltip = x.title;
    });
    const routes = [
      ...menuRoutes,
    ];
    config.map(routes);
  }

  attached() {
    this.navModels = this.router.navigation;
  }

  navigateTo(detail: IMdcListActionEventDetail) {
    if (detail.data) {
      this.router.navigate((detail.data as NavModel).relativeHref);
      if (this.drawer.type === 'modal') {
        this.drawer.toggle();
      }
    }
  }
}
