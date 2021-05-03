import { templates } from './templates';
import { IRouter, RoutingInstruction } from 'aurelia-direct-router';

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
  constructor(@IRouter public router: IRouter) { }

  template: IComponentTemplate;

  load(params: Record<string, unknown>, ri: RoutingInstruction) {
    this.template = templates[ri.component.name!];
  }
}
