import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TypographyExamples } from './typography-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'typography', template })
export class Typography extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: TypographyExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
