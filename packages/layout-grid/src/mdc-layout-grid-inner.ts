import { customElement, inlineView } from 'aurelia-framework';

/**
 * Mandatory. Added automatically by the grid element. Can be used for nested tables.
 * @selector mdc-layout-grid-inner
 */
@inlineView('<template class="mdc-layout-grid__inner"><slot></slot></template>')
@customElement('mdc-layout-grid-inner')
export class MdcLayoutGridInner { }
