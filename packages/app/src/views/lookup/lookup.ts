import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LookupExamples } from './lookup-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'lookup', template })
export class Lookup extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: LookupExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
