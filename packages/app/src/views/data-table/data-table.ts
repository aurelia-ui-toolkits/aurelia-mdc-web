import template from '../component-viewer/component-viewer.html?raw';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { ApiViewer } from '../api-viewer/api-viewer';
import { DataTableExamples } from './data-table-examples';

@customElement({ name: 'data-table', template })
export class DataTable extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: DataTableExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
