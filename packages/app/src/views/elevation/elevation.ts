import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ElevationExamples } from './elevation-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'elevation', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ElevationExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Elevation extends ComponentViewer { }
