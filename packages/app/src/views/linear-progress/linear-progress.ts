import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LinearProgressExamples } from './linear-progress-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'linear-progress', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: LinearProgressExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class LinearProgress extends ComponentViewer { }
