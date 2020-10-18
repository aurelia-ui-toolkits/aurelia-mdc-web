import { ComponentViewer } from '../component-viewer/component-viewer';
import template from '../component-viewer/component-viewer.html';
import { customElement } from 'aurelia';

@customElement({ name: 'card-page', template })
export class Card extends ComponentViewer { }
