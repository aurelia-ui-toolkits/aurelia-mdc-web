import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TooltipExamples } from './tooltip-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'tooltip', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: TooltipExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Tooltip extends ComponentViewer { }
