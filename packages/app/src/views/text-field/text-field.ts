import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TextFieldExamples } from './text-field-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'text-field', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: TextFieldExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class TextField extends ComponentViewer { }
