import { inlineView, inject, customElement } from 'aurelia-framework';

/**
 * Mandatory for dismissible variant only. Sibling element that is resized when the drawer opens/closes.
 * @selector mdc-drawer-app-content
 */
@inject(Element)
@inlineView('<template class="mdc-drawer-app-content"><slot></slot></template>')
@customElement('mdc-drawer-app-content')
export class MdcDrawerAppContent { }
