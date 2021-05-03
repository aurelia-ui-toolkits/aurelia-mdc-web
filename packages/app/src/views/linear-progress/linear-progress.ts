import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from 'aurelia-direct-router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LinearProgressExamples } from './linear-progress-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'linear-progress', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: LinearProgressExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class LinearProgress extends ComponentViewer { }
