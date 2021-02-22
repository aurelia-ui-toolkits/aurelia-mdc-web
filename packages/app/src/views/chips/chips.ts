import template from '../component-viewer/component-viewer.html';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { route, customElement } from 'aurelia';
import { ApiViewer } from '../api-viewer/api-viewer';
import { ChipsExamples } from './chips-examples';

@customElement({ name: 'chips', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ChipsExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Chips extends ComponentViewer { }
