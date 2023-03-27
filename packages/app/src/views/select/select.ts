import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { SelectExamples } from './select-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'select-page', template })
@routes([
  // { path: '', redirectTo: 'examples' },
  { id: 'examples', path: 'examples', title: 'Examples', component: SelectExamples },
  { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Select extends ComponentViewer { }
