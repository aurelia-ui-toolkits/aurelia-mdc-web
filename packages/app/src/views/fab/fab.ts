import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from 'aurelia-direct-router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { FabExamples } from './fab-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'fab', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: FabExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Fab extends ComponentViewer { }
