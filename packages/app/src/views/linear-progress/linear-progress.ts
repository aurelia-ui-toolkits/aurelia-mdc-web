import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LinearProgressExamples } from './linear-progress-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'linear-progress', template })
export class LinearProgress extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: LinearProgressExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
