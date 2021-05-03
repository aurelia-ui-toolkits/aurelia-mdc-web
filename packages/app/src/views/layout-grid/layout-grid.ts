import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from 'aurelia-direct-router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LayoutGridExamples } from './layout-grid-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'layout-grid', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: LayoutGridExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class LayoutGrid extends ComponentViewer { }
