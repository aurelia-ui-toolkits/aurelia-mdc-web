import { customElement } from 'aurelia';
import { processContent } from '@aurelia/runtime-html';
import { defaultSlotProcessContent } from '@aurelia-mdc-web/base';

/**
 * Optional. Indicates the text content of the chip.
 * @selector mdc-chip-text
 */
@customElement({ name: 'mdc-chip-text', template: '<template class="mdc-chip__text"><au-slot></au-slot></template>' })
@processContent(defaultSlotProcessContent)
export class MdcChipText { }
