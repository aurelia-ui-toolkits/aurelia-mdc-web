import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';
// import template from './card.html?raw';
import { CardExamples } from './card-examples';
import { ApiViewer } from '../api-viewer/api-viewer';
import { Routeable } from '@aurelia/router';

@customElement({ name: 'card-page', template })
export class Card extends ComponentViewer {
  static routes: Routeable[] = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: CardExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
