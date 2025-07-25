import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TooltipExamples } from './tooltip-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'tooltip', template })
export class Tooltip extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: TooltipExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
