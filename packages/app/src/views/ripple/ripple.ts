import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { RippleExamples } from './ripple-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'ripple', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: RippleExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Ripple extends ComponentViewer { }
