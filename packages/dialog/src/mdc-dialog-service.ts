import { MdcDialog } from './mdc-dialog';
import { inject, IPlatform, IContainer, IAppRoot, LifecycleFlags, createElement } from 'aurelia';
import { MDCDialogCloseEvent } from '@material/dialog';
import { Scope } from '@aurelia/runtime';
import { CustomElement } from '@aurelia/runtime-html';
import { Constructable } from '@aurelia/kernel';

/** Dialog service open method options */
export interface IMdcDialogOptions {
  /** A class represeting the dialog content view model */
  viewModel: Constructable;

  /** Data to pass to the view model's activate method */
  model?: unknown;
}

interface IMdcDialogBindingContext {
  handleClosing(evt: MDCDialogCloseEvent): void;
  handleOpened(): void;
}

/** Service to open MDC dialogs */
@inject(IPlatform, IContainer, IAppRoot)
export class MdcDialogService {
  constructor(private platform: IPlatform, private container: IContainer, private appRoot: IAppRoot) { }

  /** Opens the dialog specified in the options */
  async open(options: IMdcDialogOptions) {
    let closingResolver: (action?: string | PromiseLike<string> | undefined) => void;
    const closingPromise = new Promise<string>(r => closingResolver = r);
    let openedResolver: (value?: unknown) => void;
    const openedPromise = new Promise(r => openedResolver = r);
    const bindingContext: IMdcDialogBindingContext = {
      handleClosing: (evt: MDCDialogCloseEvent) => {
        closingResolver(evt.detail.action);
        sv.deactivate(sv, this.appRoot.controller, LifecycleFlags.none);
        dialogVm.root.removeEventListener('mdcdialog:closing', bindingContext.handleClosing);
        dialogVm.root.removeEventListener('mdcdialog:opened', bindingContext.handleOpened);
        dialogEl.remove();
      },
      handleOpened: () => {
        openedResolver();
      }
    };

    const renderPlan = createElement(this.platform, options.viewModel);
    const sv = renderPlan.createView(this.container);
    const dialogEl = sv.children![0].host!;
    sv.activate(sv, this.appRoot.controller, LifecycleFlags.none, Scope.create(bindingContext));
    document.body.appendChild(dialogEl);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vm = sv.children![0].viewModel as any;
    const dialogVm = CustomElement.for<MdcDialog>(dialogEl.querySelector('mdc-dialog')!).viewModel;
    dialogVm.root.addEventListener('mdcdialog:closing', bindingContext.handleClosing);
    dialogVm.root.addEventListener('mdcdialog:opened', bindingContext.handleOpened);
    vm.activate(options.model);
    await dialogVm.initialised;
    dialogVm.open();

    await openedPromise;

    dialogVm.createFocusTrap();
    dialogVm.focusTrap?.trapFocus();
    return closingPromise;
  }
}
