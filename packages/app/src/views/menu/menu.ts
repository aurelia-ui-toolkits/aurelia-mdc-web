import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { MenuExamples } from './menu-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'menu-page', template })
export class Menu extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: MenuExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
