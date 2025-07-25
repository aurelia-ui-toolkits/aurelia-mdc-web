import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { TextFieldExamples } from './text-field-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'text-field', template })
export class TextField extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: TextFieldExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
