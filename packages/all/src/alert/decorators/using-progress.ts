import { IAlertModalPayload } from '../alert-modal/i-alert-modal-payload';
import { AlertService } from '../alert-service';

export interface IWithAlertService {
  alertService: AlertService;
}

export function usingProgress(errorMessage?: string | Partial<IAlertModalPayload> | ((e: any) => string), allowCancel: boolean = false) {
  return function actualDecorator<This extends IWithAlertService, Args extends any[], Return>(originalMethod: (this: This, ...args: Args) => Return,
    _: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
    return function replacementMethod(this: This, ...args: Args) {
      if (!this.alertService) {
        throw new Error('Did you forget to inject AlertService?');
      }
      const abortController = new AbortController();
      document.addEventListener('global-progress:cancel', () => abortController.abort(), { once: true });
      return this.alertService.usingProgress(async () => {
        return originalMethod.call(this, ...args, abortController.signal);
      }, async e => {
        const message = errorMessage instanceof Function ? errorMessage(e) : errorMessage;
        if (e.nonCritical) {
          await this.alertService.error(message ?? e.message);
        } else {
          await this.alertService.criticalError(message ?? e.message, e);
        }
        throw e;
      }, allowCancel);
    };
  }
}
