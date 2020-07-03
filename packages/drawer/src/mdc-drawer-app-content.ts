import { inlineView, inject, customElement } from 'aurelia-framework';

@inject(Element)
@inlineView('<template class="mdc-drawer-app-content"><slot></slot></template>')
@customElement('mdc-drawer-app-content')
export class MdcDrawerAppContent { }
