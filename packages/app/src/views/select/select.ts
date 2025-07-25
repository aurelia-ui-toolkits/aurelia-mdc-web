import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { SelectExamples } from './select-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'select-page', template })
export class Select extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: SelectExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
