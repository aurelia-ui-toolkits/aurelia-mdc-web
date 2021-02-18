import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement, route } from 'aurelia';
import template from '../component-viewer/component-viewer.html';
import { DialogExamples } from './dialog-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'dialog-examples', template })
@route({
  path: 'dialog',
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: DialogExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Dialog extends ComponentViewer { }
