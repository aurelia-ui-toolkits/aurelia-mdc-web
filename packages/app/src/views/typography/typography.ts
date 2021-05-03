import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from 'aurelia-direct-router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TypographyExamples } from './typography-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'typography', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: TypographyExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Typography extends ComponentViewer { }
