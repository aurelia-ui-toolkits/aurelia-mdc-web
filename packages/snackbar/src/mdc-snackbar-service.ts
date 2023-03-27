import Aurelia, { inject, IAurelia, CustomElement } from 'aurelia';
import { IMdcSnackbarElement, MdcSnackbar } from './mdc-snackbar';
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

@inject(Aurelia)
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
        // sv.deactivate(sv, this.appRoot.controller, LifecycleFlags.none);
        // snackbarEl.removeEventListener('mdcsnackbar:closed', bindingContext.handleClosed);
        snackbar.remove();
      }
    };

    const snackbar = document.createElement('div');
    snackbar.innerHTML = '<mdc-snackbar mdcsnackbar:closed.trigger="handleClosed($event)" label.bind="label" actions.bind="actions"></mdc-snackbar>';
    const controller = await this.au.enhance({ host: snackbar, component: bindingContext });
    document.body.appendChild(snackbar);
    CustomElement.for<MdcSnackbar>(snackbar.firstElementChild as HTMLElement).viewModel.open();


    // const renderPlan = createElement(this.platform, MdcSnackbar/* TODO does not work yet , props */);
    // const sv = renderPlan.createView(this.container);
    // sv.activate(sv, this.appRoot.controller, LifecycleFlags.none, Scope.create(bindingContext));
    // const snackbarEl = sv.children![0].host!;
    // document.body.appendChild(snackbarEl);
    // snackbarEl.addEventListener('mdcsnackbar:closed', bindingContext.handleClosed);
    // const vm = sv.children![0].viewModel as MdcSnackbar;
    // vm.label = label;
    // if (actions !== undefined) {
    //   if (typeof actions === 'string') {
    //     vm.actions = [actions];
    //   } else {
    //     vm.actions = actions;
    //   }
    // }
    // if (options) {
    //   Object.assign(vm, options);
    // }
    // vm.open();
    return closedPromise;
  }
}
