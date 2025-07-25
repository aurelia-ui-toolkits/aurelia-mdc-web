import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { FabExamples } from './fab-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'fab', template })
export class Fab extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: FabExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
