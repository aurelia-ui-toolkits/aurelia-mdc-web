import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LayoutGridExamples } from './layout-grid-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'layout-grid', template })
export class LayoutGrid extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: LayoutGridExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
