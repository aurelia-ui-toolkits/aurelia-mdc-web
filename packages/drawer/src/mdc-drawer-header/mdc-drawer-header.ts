import { customElement, bindable } from 'aurelia';

/**
 * Optional. Non-scrollable element that exists at the top of the drawer.
 * @selector mdc-drawer-header
 */
@customElement('mdc-drawer-header')
export class MdcDrawerHeader {

  /** Optional. Title text element of the drawer. */
  @bindable
  title: string;

  /** Optional. Subtitle text element of the drawer. */
  @bindable
  subtitle: string;
}
