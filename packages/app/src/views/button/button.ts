import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement, route } from 'aurelia';
import template from '../component-viewer/component-viewer.html';
import { ButtonExamples } from './button-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'button-page', template })
@route({
  path: 'button',
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ButtonExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Button extends ComponentViewer { }
