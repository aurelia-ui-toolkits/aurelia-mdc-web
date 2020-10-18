import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';

@customElement({ name: 'icon-button-page', template })
export class IconButton extends ComponentViewer { }
