import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';
import { DialogExamples } from './dialog-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'dialog-page', template })
export class Dialog extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: DialogExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
