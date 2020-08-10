import { customElement, inlineView, inject, bindable } from 'aurelia-framework';

@inject(Element)
@inlineView("<template class='mdc-chip__action--primary' role='${role}' tabIndex=${tabIndex}><slot></slot></template>")
@customElement("mdc-chip-primary-action")
export class MdcChipPrimaryAction {
  @bindable role: string = "button";
  @bindable tabIndex: number = 0;

  constructor(public root: HTMLElement) { }

  focus() {
    this.root.focus();
  }
}
