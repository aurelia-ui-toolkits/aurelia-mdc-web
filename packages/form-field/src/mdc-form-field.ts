import { inject, useView, customElement, PLATFORM } from 'aurelia-framework';
import { cssClasses } from '@material/form-field';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-form-field.html'))
@customElement(cssClasses.ROOT)
export class MdcFormField {
  constructor(private root: HTMLElement) { }

  cssClasses = cssClasses;

  @bindable.booleanAttr
  nowrap: boolean;

  @bindable.booleanAttr
  alignEnd: boolean;

  @bindable.booleanAttr
  spaceBetween: boolean;

  attached() {
    const input = this.root.querySelector('input');
    if (input && input.hasAttribute('id')) {
      const label = this.root.querySelector('label');
      if (label) {
        label.setAttribute('for', input.getAttribute('id')!);
      }
    }
  }
}
