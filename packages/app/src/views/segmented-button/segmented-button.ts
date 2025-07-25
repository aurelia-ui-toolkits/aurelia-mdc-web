import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';
import { SegmentedButtonExamples } from './segmented-button-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'segmented-button-page', template })
export class SegmentedButton extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: SegmentedButtonExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];

}
