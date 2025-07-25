import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { DrawerExamples } from './drawer-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'drawer', template })
export class Drawer extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: DrawerExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
