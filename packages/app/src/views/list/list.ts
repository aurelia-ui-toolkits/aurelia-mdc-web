import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ListExamples } from './list-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'list', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ListExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class List extends ComponentViewer { }
