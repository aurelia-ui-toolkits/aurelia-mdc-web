import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { MenuSurfaceExamples } from './menu-surface-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'menu-surface', template })
export class MenuSurface extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: MenuSurfaceExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
