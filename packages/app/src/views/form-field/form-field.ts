import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { FormFieldExamples } from './form-field-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'form-field', template })
export class FormField extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: FormFieldExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
