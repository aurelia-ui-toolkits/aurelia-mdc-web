import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ElevationExamples } from './elevation-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'elevation', template })
export class Elevation extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: ElevationExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
