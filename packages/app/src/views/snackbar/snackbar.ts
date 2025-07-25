import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { SnackbarExamples } from './snackbar-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'snackbar', template })
export class Snackbar extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: SnackbarExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
