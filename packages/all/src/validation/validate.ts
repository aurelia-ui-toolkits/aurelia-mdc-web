import { IValidationController } from '@aurelia/validation-html';
import { AlertService } from '../alert/alert-service';

export interface IWithValidationController {
  validationController: IValidationController;
  alertService: AlertService;
}

/**
 * @param errorMessage Optional error message, not displayed if `null`
 */
export function validate(errorMessage?: string | undefined | null) {
  return function actualDecorator<This extends IWithValidationController, Args extends any[], Return>(originalMethod: (this: This, ...args: Args) => Return,
    _: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
    return async function replacementMethod(this: This, ...args: Args) {
      if (!this.alertService) {
        throw new Error('Did you forget to inject AlertService?');
      }
      if (!this.validationController) {
        throw new Error('Did you forget to create ValidationController?');
      }
      const errors = await this.validationController.validate();
      if (!errors.valid) {
        if (errorMessage !== null && this.alertService) {
          await this.alertService.error(errorMessage ?? 'Please fix validation errors');
        }
        return;
      }
      return originalMethod.call(this, ...args);
    };
  }
}
