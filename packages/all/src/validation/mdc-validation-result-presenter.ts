import { IValidatedElement } from '../base';
import { ValidationEvent, ValidationResultsSubscriber } from '@aurelia/validation-html';

export class MdcValidationResultPresenter implements ValidationResultsSubscriber {
  handleValidationEvent(event: ValidationEvent): void {
    const elements = new Map<IValidatedElement, boolean>();

    for (let i = 0; i < event.removedResults.length; ++i) {
      const ri = event.removedResults[i];
      for (let j = 0; j < ri.targets.length; ++j) {
        const el = ri.targets[j] as IValidatedElement;
        if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'removeError')) {
          el.removeError(ri.result);
          elements.set(el, true);
        }
      }
    }

    for (let i = 0; i < event.addedResults.length; ++i) {
      const ri = event.addedResults[i];
      for (let j = 0; j < ri.targets.length; ++j) {
        const el = ri.targets[j] as IValidatedElement;
        if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'addError')) {
          el.addError(ri.result);
          elements.set(el, true);
        }
      }
    }

    for (const el of elements.keys()) {
      if (Object.getOwnPropertyDescriptor(el, 'renderErrors')) {
        el.renderErrors();
      }
    }
  }
}
