import { templates } from './templates';
import { Navigation, IRouter } from '@aurelia/router';

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

  tabs: ITab[] = [{ title: 'Examples', link: 'examples' }, { title: 'Api', link: 'api-viewer' }];

  load(parameters: Record<string, unknown>, nextInstruction: Navigation) {
    // this.tabs = this.router.routes.filter(x => !x.redirect);
    this.template = templates[(nextInstruction.instruction as string).replace('/', '').replace('-page', '')];
  }
}
