import { ValidationRenderer, RenderInstruction } from 'aurelia-validation';
import { IValidatedElement } from '@aurelia-mdc-web/base';

export class MdcValidationRenderer implements ValidationRenderer {
  render(instruction: RenderInstruction): void {
    const elements = new Map<IValidatedElement, boolean>();

    for (let i = 0; i < instruction.unrender.length; ++i) {
      const ri = instruction.unrender[i];
      for (let j = 0; j < ri.elements.length; ++j) {
        const el = ri.elements[j] as IValidatedElement;
        if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'removeError')) {
          el.removeError(ri.result);
          elements.set(el, true);
        }
      }
    }

    for (let i = 0; i < instruction.render.length; ++i) {
      const ri = instruction.render[i];
      for (let j = 0; j < ri.elements.length; ++j) {
        const el = ri.elements[j] as IValidatedElement;
        if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'addError')) {
          el.addError(ri.result);
          elements.set(el, true);
        }
      }
    }

    for (const el of elements.keys()) {
      if (Object.getOwnPropertyDescriptor(el, 'updateErrors')) {
        el.updateErrors();
      }
    }
  }
}
