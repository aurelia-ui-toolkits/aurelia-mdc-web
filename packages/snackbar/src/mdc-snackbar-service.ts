import Aurelia, { IAurelia, CustomElement } from 'aurelia';
import { MdcSnackbar } from './mdc-snackbar';
import { MDCSnackbarCloseEvent } from '@material/snackbar';

interface IMdcSnackbarBindingContext {
  label: string;
  actions: string[] | undefined;
  options?: Partial<ISnackbarOptions>;
  handleClosed(evt: MDCSnackbarCloseEvent): void;
}

export interface ISnackbarOptions {
  timeout: number;
  closeOnEscape: boolean;
  dismissible: boolean;
  stacked: boolean;
  leading: boolean;
  classes: string;
  actionClasses: string;
  dismissClasses: string;
}

export class MdcSnackbarService {
  constructor(@IAurelia private readonly au: Aurelia) { }

  async open(label: string, actions?: string | string[], options?: Partial<ISnackbarOptions>) {
    // const props = { 'mdcsnackbar:closed.trigger': 'handleClosed($event)' };
    let closedResolver: (reason?: string | PromiseLike<string> | undefined) => void;
    const closedPromise = new Promise<string>(r => closedResolver = r);
    const bindingContext: IMdcSnackbarBindingContext = {
      label,
      actions: typeof actions === 'string' ? [actions] : actions,
      options,
      handleClosed: (evt: MDCSnackbarCloseEvent) => {
        closedResolver(evt.detail.reason);
        controller.deactivate(controller, null);
        snackbar.remove();
      }
    };

    const snackbar = document.createElement('div');
    snackbar.innerHTML = '<mdc-snackbar mdcsnackbar:closed.trigger="handleClosed($event)" label.bind="label" actions.bind="actions" dismissible.bind="options.dismissible" stacked.bind="options.stacked" timeout.bind="options.timeout" close-on-escape.bind="options.closeOnEscape" classes.bind="options.classes" action-classes.bind="options.actionClasses" dismiss-classes.bind="options.dismissClasses" leading.bind="options.leading"></mdc-snackbar>';
    const controller = await this.au.enhance({ host: snackbar, component: bindingContext });
    document.body.appendChild(snackbar);
    CustomElement.for<MdcSnackbar>(snackbar.firstElementChild as HTMLElement).viewModel.open();
    return closedPromise;
  }
}
