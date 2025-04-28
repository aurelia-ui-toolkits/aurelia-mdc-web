import { ComponentViewer } from '../component-viewer/component-viewer.js';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';

@customElement({ name: 'button-page', template })
// @routes([
//   { id: 'button-examples', path: '', title: 'Examples', component: ButtonExamples },
//   { path: 'api-viewer', title: 'Api', component: ApiViewer }
// ])
export class ButtonPage extends ComponentViewer { }
