import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';
import { ButtonExamples } from './button-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'button-page', template })
export class ButtonPage extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: ButtonExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];

}
