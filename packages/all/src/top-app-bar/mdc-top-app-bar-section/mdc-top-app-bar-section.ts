import { booleanAttr } from '../../base';
import { customElement, bindable } from 'aurelia';
import template from './mdc-top-app-bar-section.html?raw';

@customElement({ name: 'mdc-top-app-bar-section', template })
export class MdcTopAppBarSection {
  @bindable({ set: booleanAttr })
  end: boolean;
}
