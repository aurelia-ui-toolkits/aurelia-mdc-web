import { ValidationRenderer, RenderInstruction, ValidateResult } from 'aurelia-validation';
import { IMdcTextFieldHelperLineElement, IMdcTextFieldElement } from '@aurelia-mdc-web/text-field';
import { IMdcSelectElement, IMdcSelectHelperTextElement } from "@aurelia-mdc-web/select";
import { IMdcLookupElement } from "@aurelia-mdc-web/lookup";

export class MdcValidationRenderer implements ValidationRenderer {
  render(instruction: RenderInstruction): void {
    const elements = new Map<Element, boolean>();

    for (let i = 0; i < instruction.unrender.length; ++i) {
      const ri = instruction.unrender[i];
      for (let j = 0; j < ri.elements.length; ++j) {
        const el = ri.elements[j];
        if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'removeError')) {
          (el as any).removeError(ri.result);
          elements.set(el, true);
        }
      }
    }

    for (let i = 0; i < instruction.render.length; ++i) {
      const ri = instruction.render[i];
      for (let j = 0; j < ri.elements.length; ++j) {
        const el = ri.elements[j];
        if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'addError')) {
          (el as any).addError(ri.result);
          elements.set(el, true);
        }
      }
    }

    this.updateErrorMessages(elements);
  }

  protected updateErrorMessages(elements: Map<Element, boolean>) {
    for (const el of elements.keys()) {
      switch (el.tagName) {
        case 'MDC-TEXT-FIELD':
          const helperLine = el.nextElementSibling as IMdcTextFieldHelperLineElement;
          if (helperLine?.tagName === 'MDC-TEXT-FIELD-HELPER-LINE') {
            helperLine.au.controller.viewModel.errors = ((el as IMdcTextFieldElement).getErrors() as ValidateResult[])
              .filter(x => x.message !== null).map(x => x.message!);
          }
          break;
        case 'MDC-SELECT':
          const helperText = el.nextElementSibling as IMdcSelectHelperTextElement;
          if (helperText?.tagName === 'MDC-SELECT-HELPER-TEXT') {
            helperText.au.controller.viewModel.errors = ((el as IMdcSelectElement).getErrors() as ValidateResult[])
              .filter(x => x.message !== null).map(x => x.message!);
          }
          break;
        case 'MDC-LOOKUP':
          const lookup = el as IMdcLookupElement;
          const input = lookup.au.controller.viewModel.input;
          const lookupHelperLine = input?.nextElementSibling as IMdcTextFieldHelperLineElement;
          if (lookupHelperLine?.tagName === 'MDC-TEXT-FIELD-HELPER-LINE') {
            lookupHelperLine.au.controller.viewModel.errors = ((el as IMdcTextFieldElement).getErrors() as ValidateResult[])
              .filter(x => x.message !== null).map(x => x.message!);
          }
          break;
      }
    }
  }
}
