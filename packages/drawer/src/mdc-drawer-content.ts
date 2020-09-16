import { inlineView, inject, customElement } from 'aurelia-framework';

/**
 * Scrollable content area of the drawer
 * @selector mdc-drawer-content
 */
@inject(Element)
@inlineView('<template class="mdc-drawer__content"><slot></slot></template>')
@customElement('mdc-drawer-content')
export class MdcDrawerContent { }
