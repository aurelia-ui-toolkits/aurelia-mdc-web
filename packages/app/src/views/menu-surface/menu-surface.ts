import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { MenuSurfaceExamples } from './menu-surface-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'menu-surface', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: MenuSurfaceExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class MenuSurface extends ComponentViewer { }