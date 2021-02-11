import { templates } from './templates';
import { Navigation, IRouter, RouteNode } from '@aurelia/router';

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

interface ITab { title: string; link: string }

export class ComponentViewer {
  constructor(@IRouter private router: IRouter) { }

  template: IComponentTemplate;

  tabs: ITab[];

  load(parameters: Record<string, unknown>, routeNode: RouteNode) {
    const component = routeNode.path.replace('-page', '');
    this.template = templates[component];
    this.tabs = [{ title: 'Examples', link: `${component}-examples` }, { title: 'Api', link: 'api-viewer' }];
  }
}
