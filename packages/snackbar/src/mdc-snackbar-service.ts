import { inject, createElement, IPlatform, IContainer, IAppRoot, LifecycleFlags } from 'aurelia';
import { MdcSnackbar } from './mdc-snackbar';
import { MDCSnackbarCloseEvent } from '@material/snackbar';
import { Scope } from '@aurelia/runtime';

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

@inject(IPlatform, IContainer, IAppRoot)
export class MdcSnackbarService {
  constructor(private platform: IPlatform, private container: IContainer, private appRoot: IAppRoot) { }

  async open(label: string, actions?: string | string[], options?: Partial<ISnackbarOptions>) {
    // const props = { 'mdcsnackbar:closed.trigger': 'handleClosed($event)' };
    let closedResolver: (reason?: string | PromiseLike<string> | undefined) => void;
    const closedPromise = new Promise<string>(r => closedResolver = r);
    const bindingContext: IMdcSnackbarBindingContext = {
      handleClosed: (evt: MDCSnackbarCloseEvent) => {
        closedResolver(evt.detail.reason);
        sv.deactivate(sv, this.appRoot.controller, LifecycleFlags.none);
        snackbarEl.removeEventListener('mdcsnackbar:closed', bindingContext.handleClosed);
        snackbarEl.remove();
      }
    };

    const renderPlan = createElement(this.platform, MdcSnackbar/* TODO does not work yet , props */);
    const sv = renderPlan.createView(this.container);
    sv.activate(sv, this.appRoot.controller, LifecycleFlags.none, Scope.create(bindingContext));
    const snackbarEl = sv.children![0].host!;
    document.body.appendChild(snackbarEl);
    snackbarEl.addEventListener('mdcsnackbar:closed', bindingContext.handleClosed);
    const vm = sv.children![0].viewModel as MdcSnackbar;
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
    vm.open();
    return closedPromise;
  }
}
