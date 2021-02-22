import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ExpandableExamples } from './expandable-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'expandable', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ExpandableExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Expandable extends ComponentViewer { }
