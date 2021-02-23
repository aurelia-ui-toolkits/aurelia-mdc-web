import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { RadioExamples } from './radio-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'radio', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: RadioExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Radio extends ComponentViewer { }
