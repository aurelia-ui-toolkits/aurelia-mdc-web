import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { SnackbarExamples } from './snackbar-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'snackbar', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: SnackbarExamples },
    { id: 'api', title: 'Api', component: ApiViewer }]
})
export class Snackbar extends ComponentViewer { }
