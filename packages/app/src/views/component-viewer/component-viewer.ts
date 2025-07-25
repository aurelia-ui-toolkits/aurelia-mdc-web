import { templates } from './templates';
import { RouteNode } from '@aurelia/router';

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
  examples: string;
  api = 'api';
  template: IComponentTemplate;
  apiActive: boolean;

  // loading(params: Record<string, unknown>, ri: RoutingInstruction, nav: Navigation) {
  loading(params: Record<string, unknown>, node: RouteNode) {
    this.apiActive = node.residue[0]?.component.value === 'api';
    this.examples = 'examples';
    this.template = templates[node.path!.replace('/*$$residue', '')];
  }
}
