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
    const exampleRoutes: RouteConfig[] = ['button', 'card', 'checkbox', 'chips', 'circular-progress', 'data-table', 'dialog', 'drawer', 'elevation',
      'expandable', 'fab', 'form-field', 'icon-button', 'image-list', 'layout-grid', 'linear-progress', 'list', 'lookup', 'menu', 'menu-surface',
      'radio', 'ripple', 'select', 'slider', 'snackbar', 'switch', 'tabs', 'text-field', 'top-app-bar', 'tree-view', 'typography']
      .map(x => ({ route: x }));

    const menuRoutes: RouteConfig[] = [
      { route: ['', 'home'], title: 'Home', name: 'home', divider: true },
      { route: 'getting-started', divider: true },
      ...exampleRoutes
    ];
    menuRoutes.forEach(x => {
      x.nav = true;
      x.name = x.name ?? x.route as string;
      x.moduleId = `views/${x.name}/${x.name}`;
      x.title = x.title ?? (x.route as string).split('-').map(y => `${y[0].toUpperCase()}${y.substring(1)}`).join(' ');
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
