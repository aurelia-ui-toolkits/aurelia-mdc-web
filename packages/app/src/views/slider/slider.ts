import template from '../component-viewer/component-viewer.html?raw';
import { customElement } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { SliderExamples } from './slider-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'slider', template })
export class Slider extends ComponentViewer {
  static routes = [    { path: '', redirectTo: 'examples' },
    { path: 'examples', title: 'Examples', component: SliderExamples },
    { path: 'api', title: 'Api', component: ApiViewer }
  ];
}
