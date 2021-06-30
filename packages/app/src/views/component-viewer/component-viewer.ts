import { templates } from './templates';
import { IRouter, Navigation, RoutingInstruction } from 'aurelia-direct-router';

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

  examples: string;
  api = 'api-viewer';
  template: IComponentTemplate;
  apiActive: boolean;

  load(params: Record<string, unknown>, ri: RoutingInstruction, nav: Navigation) {
    this.apiActive = nav.path?.endsWith(this.api) ?? false;
    this.examples = `${ri.component.name?.replace('-page', '')}-examples`;
    this.template = templates[ri.component.name!];
  }
}
