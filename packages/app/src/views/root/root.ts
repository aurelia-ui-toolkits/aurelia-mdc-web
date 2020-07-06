import { RouterConfiguration, RouteConfig, NavModel, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Root {
  constructor(private router: Router) { }

  navModels: NavModel[];

  configureRouter(config: RouterConfiguration) {
    const exampleRoutes: RouteConfig[] = [
      { route: 'button' },
      { route: 'drawer' },
      { route: 'form-field' },
      { route: 'list' },
      { route: 'ripple' },
      { route: 'text-field' },
      { route: 'top-app-bar' },
    ];

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

  navigateTo(nm: NavModel) {
    this.router.navigate(nm.relativeHref);
  }
}
