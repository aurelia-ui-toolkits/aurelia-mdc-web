import { customElement, useView, inject, PLATFORM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-card-actions.html'))
@customElement('mdc-card-actions')
export class MdcCardActions {
  constructor(private root: HTMLElement) { }

  @bindable.booleanAttr
  fullBleed: boolean;

  attached() {
    const children = this.root.children;
    for (let i = 0; i < children.length; ++i) {
      const child = children[i];
      child.classList.add('mdc-card__action');
      if (child.classList.contains('mdc-icon-button')) {
        child.classList.add('mdc-card__action--icon');
      }
      if (child.classList.contains('mdc-button')) {
        child.classList.add('mdc-card__action--button');
      }
    }
  }
}
