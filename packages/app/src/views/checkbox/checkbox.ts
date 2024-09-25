import template from '../component-viewer/component-viewer.html?raw';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ApiViewer } from '../api-viewer/api-viewer';
import { CheckboxExamples } from './checkbox-examples';

@customElement({ name: 'checkbox', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: CheckboxExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Checkbox extends ComponentViewer { }
