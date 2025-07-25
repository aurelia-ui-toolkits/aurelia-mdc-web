import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { IconButtonExamples } from './icon-button-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'icon-button', template })
export class IconButton extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: IconButtonExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
