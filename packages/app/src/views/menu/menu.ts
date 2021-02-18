import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { MenuExamples } from './menu-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'menu-page', template })
@route({
  path: 'menu',
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: MenuExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Menu extends ComponentViewer { }
