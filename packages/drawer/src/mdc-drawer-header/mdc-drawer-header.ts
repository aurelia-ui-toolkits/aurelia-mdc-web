import { customElement, bindable } from 'aurelia';
import template from './mdc-drawer-header.html';

/**
 * Optional. Non-scrollable element that exists at the top of the drawer.
 * @selector mdc-drawer-header
 */
@customElement({ name: 'mdc-drawer-header', template })
export class MdcDrawerHeader {

  /** Optional. Title text element of the drawer. */
  @bindable()
  title: string;

  /** Optional. Subtitle text element of the drawer. */
  @bindable()
  subtitle: string;
}
