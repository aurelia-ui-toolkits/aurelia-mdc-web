import { customElement } from 'aurelia';

/**
 * Mandatory for dismissible variant only. Sibling element that is resized when the drawer opens/closes.
 * @selector mdc-drawer-app-content
 */
@customElement({
  name: 'mdc-drawer-app-content',
  template: '<template class="mdc-drawer-app-content"><au-slot></au-slot></template>'
})
export class MdcDrawerAppContent { }
