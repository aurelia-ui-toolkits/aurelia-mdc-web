import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html';

@customElement({ name: 'button-page', template })
export class Button extends ComponentViewer {}
