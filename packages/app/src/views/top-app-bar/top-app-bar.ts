import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ApiViewer } from '../api-viewer/api-viewer';
import { TopAppBarExamples } from './top-app-bar-examples';

@customElement({ name: 'top-app-bar', template })
export class TopAppBar extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: TopAppBarExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
