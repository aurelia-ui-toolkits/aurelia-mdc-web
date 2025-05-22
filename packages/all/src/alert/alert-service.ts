import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { merge } from 'rxjs/internal/observable/merge';
import { map } from 'rxjs/internal/operators/map';
import { scan } from 'rxjs/internal/operators/scan';
import { AlertModal } from './alert-modal/alert-modal';
import { IMdcDialogOptions, MdcDialogService } from '@aurelia-mdc-web/all';
import { IPromptDialogData, PromptDialog } from './prompt-dialog/prompt-dialog';
import { ExceptionsTracker } from './exceptions-tracker';
import { IAlertModalPayload } from './alert-modal/i-alert-modal-payload';
import { resolve } from 'aurelia';
import { MdcConfiguration } from '../mdc-configuration';

export class AlertService {
  private dialogService: MdcDialogService = resolve(MdcDialogService);
  private exceptionsTracker: ExceptionsTracker = resolve(ExceptionsTracker);
  private configuration = resolve(MdcConfiguration);

  increment$ = new Subject<void>();
  decrement$ = new Subject<void>();
  busy$ = new BehaviorSubject<boolean>(false);
  busyAccumulator$ = merge(this.increment$.pipe(map(() => 1)), this.decrement$.pipe(map(() => -1)))
    .pipe(
      scan((acc, v) => acc += v, 0),
      map(v => v > 0)
    ).subscribe(this.busy$);
  allowCancel$ = new Subject<boolean>();

  showProgress() {
    this.increment$.next();
  }

  hideProgress() {
    this.decrement$.next();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async usingProgress<T, E = never>(action: () => Promise<T>, catchHandler?: (e: any) => Promise<E> | E, allowCancel?: boolean): Promise<T | E> {
    try {
      this.allowCancel$.next(allowCancel ?? false);
      this.showProgress();
      return await action();
    } catch (e) {
      if (catchHandler) {
        return await catchHandler(e);
      } else {
        throw e;
      }
    } finally {
      this.hideProgress();
    }
  }

  async open<T extends { loading: (params: any) => any; }>(options: IMdcDialogOptions<T>): Promise<string> {
    try {
      this.hideProgress();
      return await this.dialogService.open(options);
    } finally {
      this.showProgress();
    }
  }

  async showModal(model: Partial<IAlertModalPayload>): Promise<string> {
    return await this.open({ viewModel: AlertModal, model });
  }

  async alert(message: string | Partial<IAlertModalPayload>): Promise<boolean> {
    if (typeof message === 'string') {
      message = { message };
    }
    const model: Partial<IAlertModalPayload> = {
      icon: 'info',
      iconColour: 'mdc-theme--primary',
      okText: this.configuration.alert.okText,
      ...message
    };
    return await this.showModal(model) === 'ok';
  }

  async confirm(message: string | Partial<IAlertModalPayload>): Promise<boolean> {
    if (typeof message === 'string') {
      message = { message };
    }
    const model: IAlertModalPayload = {
      icon: 'help',
      iconColour: 'mdc-theme--primary',
      okText: this.configuration.alert.yesText,
      cancelText: this.configuration.alert.noText,
      ...message
    };
    return await this.showModal(model) === 'ok';
  }

  async prompt(data: Partial<IPromptDialogData>): Promise<boolean> {
    data.okText ??= this.configuration.alert.okText;
    data.cancelText ??= this.configuration.alert.cancelText;
    return await this.open({ viewModel: PromptDialog, model: data }) === 'ok';
  }

  async error(message: string | Partial<IAlertModalPayload>): Promise<boolean> {
    if (typeof message === 'string') {
      message = { message };
    }
    message.icon = 'error';
    message.iconColour = 'mdc-theme--error';
    return this.alert(message);
  }

  async criticalError(message: string | Partial<IAlertModalPayload>, error: Error): Promise<boolean> {
    this.exceptionsTracker.track(error);
    return this.error(message);
  }
}
