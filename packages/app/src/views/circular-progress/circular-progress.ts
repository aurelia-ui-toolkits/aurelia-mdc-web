import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ApiViewer } from '../api-viewer/api-viewer';
import { CircularProgressExamples } from './circular-progress-examples';
import { routes } from 'aurelia-direct-router';

@customElement({ name: 'circular-progress', template })
@routes([
  { path: '', redirectTo: 'examples' },
  { id: 'examples', path: 'examples', title: 'Examples', component: CircularProgressExamples },
  { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class CircularProgress extends ComponentViewer { }
