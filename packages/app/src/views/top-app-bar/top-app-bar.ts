import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';

@customElement({ name: 'top-app-bar-page', template })
export class TopAppBar extends ComponentViewer { }
