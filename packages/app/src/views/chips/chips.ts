import template from '../component-viewer/component-viewer.html?raw';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import { ApiViewer } from '../api-viewer/api-viewer';
import { ChipsExamples } from './chips-examples';

@customElement({ name: 'chips', template })
export class Chips extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: ChipsExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
