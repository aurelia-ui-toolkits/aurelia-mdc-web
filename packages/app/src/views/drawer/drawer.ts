import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';

@customElement({ name: 'drawer-page', template })
export class Drawer extends ComponentViewer { }
