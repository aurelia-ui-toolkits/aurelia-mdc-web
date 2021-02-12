import { templates } from './templates';
import { RouteNode, IRouteContext } from '@aurelia/router';

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
  constructor(@IRouteContext public routeContext: IRouteContext) { }

  template: IComponentTemplate;

  load(parameters: Record<string, unknown>, routeNode: RouteNode) {
    const componentName = routeNode.path;
    this.template = templates[componentName];
  }
}
