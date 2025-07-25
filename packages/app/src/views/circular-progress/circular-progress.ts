import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ApiViewer } from '../api-viewer/api-viewer';
import { CircularProgressExamples } from './circular-progress-examples';

@customElement({ name: 'circular-progress', template })
export class CircularProgress extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: CircularProgressExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];

}
