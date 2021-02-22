import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ElevationExamples } from './elevation-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'elevation', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ElevationExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Elevation extends ComponentViewer { }
