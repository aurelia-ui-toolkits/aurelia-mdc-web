import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TreeViewExamples } from './tree-view-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'tree-view', template })
export class TreeView extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: TreeViewExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
