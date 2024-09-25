import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { routes } from '@aurelia/router';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { MenuExamples } from './menu-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'menu-page', template })
@routes([
  // { path: '', redirectTo: 'examples' },
  { id: 'examples', path: 'examples', title: 'Examples', component: MenuExamples },
  { id: 'api', path: 'api', title: 'Api', component: ApiViewer }
])
export class Menu extends ComponentViewer { }
