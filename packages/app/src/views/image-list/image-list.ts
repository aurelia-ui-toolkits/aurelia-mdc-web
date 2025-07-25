import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { ImageListExamples } from './image-list-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'image-list', template })
export class ImageList extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: ImageListExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
