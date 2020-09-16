import { inject, customElement, useView, PLATFORM, bindable } from 'aurelia-framework';

/**
 * Optional. Non-scrollable element that exists at the top of the drawer.
 * @selector mdc-drawer-header
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-drawer-header.html'))
@customElement('mdc-drawer-header')
export class MdcDrawerHeader {

  /** Optional. Title text element of the drawer. */
  @bindable
  title: string;

  /** Optional. Subtitle text element of the drawer. */
  @bindable
  subtitle: string;
}
