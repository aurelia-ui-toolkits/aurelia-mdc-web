import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html';
import { ButtonExamples } from './button-examples';
import { ApiViewer } from '../api-viewer/api-viewer';
import { routes } from 'aurelia-direct-router';

@customElement({ name: 'button-page', template })
@routes([
  { id: 'default', path: '', component: ButtonExamples },
  { path: 'examples', title: 'Examples', component: ButtonExamples },
  { path: 'api', title: 'Api', component: ApiViewer }
])
export class Button extends ComponentViewer { }
