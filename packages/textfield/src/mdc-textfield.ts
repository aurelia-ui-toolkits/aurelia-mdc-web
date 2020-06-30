import { useView, inject, customElement } from 'aurelia-framework';

@inject(Element)
@useView('./mdc-textfield.html')
@customElement('mdc-textfield')
export class MdcTextField {
  constructor(private element: HTMLElement) {
    this.element;
  }
}
