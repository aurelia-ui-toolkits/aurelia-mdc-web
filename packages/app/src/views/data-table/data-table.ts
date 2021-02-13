import template from '../component-viewer/component-viewer.html';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { route, customElement } from 'aurelia';
import { ApiViewer } from '../api-viewer/api-viewer';
import { DataTableExamples } from './data-table-examples';

@customElement({ name: 'data-table', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: DataTableExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class DataTable extends ComponentViewer { }
