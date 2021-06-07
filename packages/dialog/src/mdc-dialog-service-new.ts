import { IMdcDialogElement } from './mdc-dialog';
import { inject, ViewSlot, ViewResources, CompositionEngine, Container } from 'aurelia-framework';
import { strings, MDCDialogCloseEvent } from '@material/dialog';

/** Dialog service open method options */
export interface IMdcDialogOptionsNew {
  /** A class represeting the dialog content view model */
  viewModel: unknown;

  /** Data to pass to the view model's activate method */
  model?: unknown;
}

/** Service to open MDC dialogs */
@inject(ViewResources, CompositionEngine, Container)
export class MdcDialogServiceNew {
  constructor(private viewResources: ViewResources, private compositionEngine: CompositionEngine, private container: Container) { }

  /** Opens the dialog specified in the options */
  async open(options: IMdcDialogOptionsNew) {
    const host = document.createElement('div');
    document.body.append(host);
    const compositionContext = {
      container: this.container,
      viewResources: this.viewResources,
      model: options.model,
      viewModel: options.viewModel,
      viewSlot: new ViewSlot(host, true),
      bindingContext: {}
    };
    const controller = await this.compositionEngine.compose(compositionContext);
    await this.compositionEngine.ensureViewModel(compositionContext);
    controller.attached();
    const dialogVm = host.querySelector<IMdcDialogElement>('.mdc-dialog')?.au.controller.viewModel;
    if (!dialogVm) {
      throw new Error('MDC-DIALOG element is missing');
    }
    let closedResolver: (action?: string | PromiseLike<string> | undefined) => void;
    const closedPromise = new Promise<string>(r => closedResolver = r);
    dialogVm.root.addEventListener(strings.CLOSED_EVENT, (evt: MDCDialogCloseEvent) => closedResolver(evt.detail.action));
    await dialogVm.initialised;
    dialogVm.open();
    const action = await closedPromise;
    controller.detached();
    host.remove();
    return action;
  }
}
