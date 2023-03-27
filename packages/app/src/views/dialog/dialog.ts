import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import template from '../component-viewer/component-viewer.html';
import { DialogExamples } from './dialog-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'dialog-page', template })
@routes([
    { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: DialogExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Dialog extends ComponentViewer { }
