import { customElement, bindable } from 'aurelia-framework';

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
  tabs?: ITab[];
}

@customElement('component-viewer')
export class ComponentViewer {
  defaultTabs = [{ label: 'Api', route: './api' }, { label: 'Examples', route: './examples' }];

  @bindable
  template: IComponentTemplate;

  bind() {
    if (!this.template.tabs) {
      this.template.tabs = this.defaultTabs;
    }
  }
}
