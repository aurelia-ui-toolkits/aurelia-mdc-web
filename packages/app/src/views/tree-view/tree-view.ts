import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';

@customElement({ name: 'tree-view', template })
export class TreeView extends ComponentViewer { }
