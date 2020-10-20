import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement, inject, Router } from 'aurelia';
import template from '../component-viewer/component-viewer.html';

@inject(Router)
@customElement({ name: 'button-page', template })
export class Button extends ComponentViewer { }
