import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ApiViewer } from '../api-viewer/api-viewer';
import { CircularProgressExamples } from './circular-progress-examples';

@customElement({ name: 'circular-progress', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: CircularProgressExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class CircularProgress extends ComponentViewer { }
