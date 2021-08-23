import { IMdcDialogElement } from './mdc-dialog';
import { inject, ViewSlot, ViewResources, CompositionEngine, Container } from 'aurelia-framework';
import { strings, MDCDialogCloseEvent } from '@material/dialog';
import { IMdcRippleElement, MdcRipple } from '@aurelia-mdc-web/ripple';

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
    let openedResolver: () => void;
    const openedPromise = new Promise<void>(r => openedResolver = r);
    dialogVm.root.addEventListener(strings.CLOSED_EVENT, (evt: MDCDialogCloseEvent) => closedResolver(evt.detail.action));
    dialogVm.root.addEventListener(strings.OPENED_EVENT, () => openedResolver());
    await dialogVm.initialised;
    dialogVm.open();
    await openedPromise;
    // re-layout ripple elements because dialogs use `transform: scale(.8)` and initial layout is incorrect
    const ripples = Array.from(dialogVm.root.querySelectorAll<IMdcRippleElement>(`.${MdcRipple.ATTRIBUTE_CLASS}`));
    await Promise.all(ripples.map(async x => {
      await x.au['mdc-ripple'].viewModel.initialised;
      x.au['mdc-ripple'].viewModel.foundation?.layout();
    }));
    const action = await closedPromise;
    controller.detached();
    host.remove();
    return action;
  }
}
