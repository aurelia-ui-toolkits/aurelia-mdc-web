import { customElement } from 'aurelia';

/**
 * Scrollable content area of the drawer
 * @selector mdc-drawer-content
 */
@customElement({
  name: 'mdc-drawer-content',
  template: '<template class="mdc-drawer__content"><au-slot></au-slot></template>'
})
export class MdcDrawerContent { }
