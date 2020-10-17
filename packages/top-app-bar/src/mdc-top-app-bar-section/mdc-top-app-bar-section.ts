import { customElement, bindable } from 'aurelia';

@customElement('mdc-top-app-bar-section')
export class MdcTopAppBarSection {
  @bindable
  align: 'start' | 'end' = 'start';
}
