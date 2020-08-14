import { customElement, inlineView, inject, bindable } from 'aurelia-framework';

@inject(Element)
@inlineView("<template class='mdc-chip__action--primary' role='${role}' tabindex=${tabindex}><slot></slot></template>")
@customElement("mdc-chip-primary-action")
export class MdcChipPrimaryAction {
  @bindable role: string = "button";
  @bindable tabindex: number = 0;

  constructor(public root: HTMLElement) { }

  focus() {
    this.root.focus();
  }
}
