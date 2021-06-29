import { booleanAttr } from '@aurelia-mdc-web/base';
import { customElement, bindable } from 'aurelia';

@customElement('mdc-top-app-bar-section')
export class MdcTopAppBarSection {
  @bindable({ set: booleanAttr })
  end: boolean;
}
