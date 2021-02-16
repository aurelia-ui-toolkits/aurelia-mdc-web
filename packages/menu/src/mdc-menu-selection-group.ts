import { customElement } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

@customElement({ name: 'mdc-menu-selection-group', template: '<template class="mdc-menu__selection-group"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcMenuSelectionGroup { }
