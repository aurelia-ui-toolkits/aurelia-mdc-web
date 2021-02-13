import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement, route } from 'aurelia';
import template from '../component-viewer/component-viewer.html';
import { CardExamples } from './card-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'card', template })
@route({
  path: 'card',
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: CardExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class Card extends ComponentViewer { }
