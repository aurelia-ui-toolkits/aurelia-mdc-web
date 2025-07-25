import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { RadioExamples } from './radio-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'radio', template })
export class Radio extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: RadioExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
