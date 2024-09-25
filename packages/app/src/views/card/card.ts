import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';
import { CardExamples } from './card-examples';
import { ApiViewer } from '../api-viewer/api-viewer';
import { routes } from '@aurelia/router';

@customElement({ name: 'card', template })
@routes([
  { path: '', redirectTo: 'examples' },
  { path: 'examples', title: 'Examples', component: CardExamples },
  { path: 'api', title: 'Api', component: ApiViewer }
])
export class Card extends ComponentViewer { }
