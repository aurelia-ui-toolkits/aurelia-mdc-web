import { inlineView, inject, customElement } from 'aurelia-framework';

@inject(Element)
@inlineView('<template class="mdc-drawer__content"><slot></slot></template>')
@customElement('mdc-drawer-content')
export class MdcDrawerContent { }
