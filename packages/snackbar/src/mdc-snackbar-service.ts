import { TemplatingEngine, inject } from 'aurelia-framework';
import { IMdcSnackbarElement } from './mdc-snackbar';
import { strings, MDCSnackbarCloseEvent } from '@material/snackbar';

interface IMdcSnackbarBindingContext {
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

@inject(TemplatingEngine)
export class MdcSnackbarService {
  constructor(private templatingEngine: TemplatingEngine) { }

  async open(label: string, actions?: string | string[], options?: Partial<ISnackbarOptions>) {
    const snackbar = document.createElement('aside') as IMdcSnackbarElement;
    snackbar.setAttribute('as-element', 'mdc-snackbar');
    snackbar.setAttribute(`${strings.CLOSED_EVENT}.trigger`, 'handleClosed($event)');
    document.body.appendChild(snackbar);
    let closedResolver: (reason?: string | PromiseLike<string> | undefined) => void;
    const closedPromise = new Promise<string>(r => closedResolver = r);
    const bindingContext: IMdcSnackbarBindingContext = {
      handleClosed: (evt: MDCSnackbarCloseEvent) => {
        closedResolver(evt.detail.reason);
        childView.detached();
        snackbar.remove();
      }
    };
    const childView = this.templatingEngine.enhance({ element: snackbar, bindingContext });
    const vm = snackbar.au.controller.viewModel;
    vm.label = label;
    if (actions !== undefined) {
      if (typeof actions === 'string') {
        vm.actions = [actions];
      } else {
        vm.actions = actions;
      }
    }
    if (options) {
      Object.assign(vm, options);
    }
    await vm.initialised;
    snackbar.au.controller.viewModel.open();
    return closedPromise;
  }
}
