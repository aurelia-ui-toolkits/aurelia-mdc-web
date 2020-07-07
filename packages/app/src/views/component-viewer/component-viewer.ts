import { RouterConfiguration, Router, RouteConfig } from 'aurelia-router';

interface IReference {
  name: string;
  url: string;
}

interface ITab {
  label?: string;
  route: string;
}

export interface IComponentTemplate {
  title?: string;
  description?: string;
  references?: IReference[];
  code?: string;
  sass?: string;
  mdcUrls?: IReference[];
}

export abstract class ComponentViewer {
  constructor() { }

  abstract template: IComponentTemplate;

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.map([
      { route: '', redirect: 'examples' },
      { route: 'examples', name: 'examples', title: 'Examples', moduleId: './examples' },
      { route: 'api', name: 'api', title: 'Api', moduleId: './api' }
    ]);
  }

  tabs: RouteConfig[];

  attached() {
    this.tabs = this.router.routes.filter(x => !x.redirect);
  }

  navigateTo(tab: RouteConfig) {
    this.router.navigateToRoute(tab.route as string);
  }

}
