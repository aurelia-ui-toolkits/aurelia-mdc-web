import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { RadioExamples } from './radio-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'radio', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: RadioExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Radio extends ComponentViewer { }
