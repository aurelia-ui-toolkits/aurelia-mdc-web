import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TabsExamples } from './tabs-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'tabs', template })
export class Tabs extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: TabsExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
