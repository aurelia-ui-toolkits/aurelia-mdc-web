import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { DrawerExamples } from './drawer-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'drawer', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: DrawerExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Drawer extends ComponentViewer { }
