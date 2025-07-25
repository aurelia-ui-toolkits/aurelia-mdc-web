import { ComponentViewer } from '../component-viewer/component-viewer';
import { customElement } from 'aurelia';
import template from '../component-viewer/component-viewer.html?raw';
import { ApiViewer } from '../api-viewer/api-viewer';
import { BannerExamples } from './banner-examples';

@customElement({ name: 'banner-page', template })
export class Banner extends ComponentViewer {
  static routes = [
    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: BannerExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];

}
