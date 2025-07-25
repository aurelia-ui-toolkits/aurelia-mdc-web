import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { RippleExamples } from './ripple-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'ripple', template })
export class Ripple extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: RippleExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
