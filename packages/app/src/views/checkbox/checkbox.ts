import template from '../component-viewer/component-viewer.html?raw';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { ApiViewer } from '../api-viewer/api-viewer';
import { CheckboxExamples } from './checkbox-examples';

@customElement({ name: 'checkbox', template })
export class Checkbox extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: CheckboxExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
