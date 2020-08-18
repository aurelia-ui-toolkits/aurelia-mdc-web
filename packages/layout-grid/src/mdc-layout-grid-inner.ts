import { customElement, inlineView } from 'aurelia-framework';

@inlineView('<template class="mdc-layout-grid__inner"><slot></slot></template>')
@customElement('mdc-layout-grid-inner')
export class MdcLayoutGrid { }
