import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ListExamples } from './list-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'list', template })
export class List extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: ListExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
