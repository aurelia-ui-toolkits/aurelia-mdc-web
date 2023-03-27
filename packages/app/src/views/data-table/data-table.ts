import template from '../component-viewer/component-viewer.html';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { ApiViewer } from '../api-viewer/api-viewer';
import { DataTableExamples } from './data-table-examples';
import { routes } from '@aurelia/router';

@customElement({ name: 'data-table', template })
@routes([
  { path: '', redirectTo: 'examples' },
  { path: 'examples', title: 'Examples', component: DataTableExamples },
  { path: 'api', title: 'Api', component: ApiViewer }
])
export class DataTable extends ComponentViewer { }
