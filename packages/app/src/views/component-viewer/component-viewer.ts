import { templates } from './templates';
import { Router } from 'aurelia';
import { Navigation } from '@aurelia/router';

interface IReference {
  name: string;
  url: string;
}

export interface IComponentTemplate {
  title?: string;
  description?: string;
  references?: IReference[];
  code?: string;
  sass?: string;
  mdcUrls?: IReference[];
}

export class ComponentViewer {
  template: IComponentTemplate;

  router: Router;

  // configureRouter(config: RouterConfiguration, router: Router) {
  //   this.router = router;
  //   config.map([
  //     { route: '', redirect: 'examples' },
  //     { route: 'examples', name: 'examples', title: 'Examples', moduleId: './examples' },
  //     { route: 'api', name: 'api', title: 'Api', moduleId: '../api-viewer/api-viewer' }
  //   ]);
  // }

  // tabs: RouteConfig[];

  load(parameters: Record<string, unknown>, nextInstruction: Navigation, instruction: Navigation) {
    // this.tabs = this.router.routes.filter(x => !x.redirect);
    this.template = templates[(nextInstruction.instruction as string).replace('/', '').replace('-page', '')];
  }

  // navigateTo(tab: RouteConfig) {
  //   this.router.navigateToRoute(tab.route as string);
  // }

}
