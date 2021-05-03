import template from '../component-viewer/component-viewer.html';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { routes } from 'aurelia-direct-router';
import { ApiViewer } from '../api-viewer/api-viewer';
import { ChipsExamples } from './chips-examples';

@customElement({ name: 'chips', template })
@routes([    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: ChipsExamples },
    { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Chips extends ComponentViewer { }
