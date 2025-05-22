import { CustomAttribute, CustomElement, customAttribute, inject, templateCompilerHooks } from 'aurelia';

// mdc-text-field needs to know when inputmask updates internal input element
@inject(Element)
@customAttribute('mdc-inputmask')
export class MdcInputmaskCustomAttribute {
  constructor(private element: Element) { }

  attached() {
    this.element.addEventListener('inputmask-change', this);
    this.inputmaskChangeHandler();
  }

  detached() {
    this.element.removeEventListener('inputmask-change', this);
  }

  handleEvent(e: Event) {
    if (e.type === 'inputmask-change') {
      this.inputmaskChangeHandler();
    }
  }

  inputmaskChangeHandler() {
    const inputmask = CustomAttribute.for<{ input: HTMLInputElement }>(this.element, 'inputmask')?.viewModel;
    const input = CustomElement.for<{ value: string; foundation?: { setValue(value: string): void } }>(this.element)?.viewModel;
    if (inputmask && input) {
      input.value = inputmask.input.value;
      input.foundation?.setValue(inputmask.input.value);
    }
  }
}

@templateCompilerHooks
export class EnhanceMask {
  compiling(template: HTMLTemplateElement) {
    if (!template.content) {
      return;
    }
    const inputs = template.content.querySelectorAll('[inputmask]');
    for (const i of Array.from(inputs)) {
      i.setAttribute('mdc-inputmask', '');
    }
  }
}
