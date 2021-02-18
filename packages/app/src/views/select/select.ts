import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { SelectExamples } from './select-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'select-page', template })
@route({
  path: 'select',
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: SelectExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Select extends ComponentViewer { }
