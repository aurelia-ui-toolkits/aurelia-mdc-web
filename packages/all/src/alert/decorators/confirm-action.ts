import { IAlertModalPayload } from '../alert-modal/i-alert-modal-payload';
import { IWithAlertService } from './using-progress';

export function confirmAction(message: string | Partial<IAlertModalPayload>) {
  return function actualDecorator<This extends IWithAlertService, Args extends any[], Return>(originalMethod: (this: This, ...args: Args) => Return,
    _: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
    return async function replacementMethod(this: This, ...args: Args) {
      if (!this.alertService) {
        throw new Error('Did you forget to inject AlertService?');
      }

      if (!await this.alertService.confirm(message)) {
        return;
      }
      return originalMethod.call(this, args);
    };
  };
}
