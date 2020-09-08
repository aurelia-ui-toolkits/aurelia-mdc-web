import { customElement, inlineView } from 'aurelia-framework';

/**
 * Optional. Indicates the text content of the chip.
 * @selector mdc-chip-text
 */
@inlineView('<template class="mdc-chip__text"><slot></slot></template>')
@customElement('mdc-chip-text')
export class MdcChipText {

}
