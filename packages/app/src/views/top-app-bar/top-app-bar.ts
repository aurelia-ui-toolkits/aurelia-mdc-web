import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ApiViewer } from '../api-viewer/api-viewer';
import { TopAppBarExamples } from './top-app-bar-examples';

@customElement({ name: 'top-app-bar', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: TopAppBarExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class TopAppBar extends ComponentViewer { }
