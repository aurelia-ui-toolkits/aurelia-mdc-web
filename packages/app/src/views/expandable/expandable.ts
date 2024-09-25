import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ExpandableExamples } from './expandable-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'expandable', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ExpandableExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Expandable extends ComponentViewer { }
