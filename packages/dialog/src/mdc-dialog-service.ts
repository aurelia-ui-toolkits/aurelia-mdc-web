import { MdcDialog } from './mdc-dialog';
import Aurelia, { CustomAttribute, IAurelia, resolve } from 'aurelia';
import { MDCDialogCloseEvent, strings } from '@material/dialog';
import { CustomElement } from '@aurelia/runtime-html';
import { Constructable } from '@aurelia/kernel';
import { IMdcRippleElement, MdcRipple } from '@aurelia-mdc-web/ripple';

/** Dialog service open method options */
export interface IMdcDialogOptions<T extends { loading: (params: any) => any }> {
  /** A class represeting the dialog content view model */
  viewModel: Constructable<T>;

  /** Data to pass to the view model's loading method */
  model?: unknown;
}

interface IMdcDialogBindingContext {
  handleClosed(evt: MDCDialogCloseEvent): void;
  handleOpened(): void;
}

/** Service to open MDC dialogs */
export class MdcDialogService {
  constructor(private readonly au: Aurelia = resolve(IAurelia)) { }

  /** Opens the dialog specified in the options */
  async open<T extends { loading: (params: any) => any }>(options: IMdcDialogOptions<T>) {
    let closedResolver: (action?: string | PromiseLike<string> | undefined) => void;
    const closedPromise = new Promise<string>(r => closedResolver = r);
    let openedResolver: (value?: unknown) => void;
    const openedPromise = new Promise(r => openedResolver = r);
    let opened = false;
    const bindingContext: IMdcDialogBindingContext = {
      handleOpened: () => {
        opened = true;
        openedResolver();
      },
      handleClosed: (evt: MDCDialogCloseEvent) => {
        if (!opened) {
          // The dialog was closed before it was opened, need to prevent an unresolved open promise.
          openedResolver();
        }
        closedResolver(evt.detail.action);
        controller.deactivate();
        dialogVm.root.removeEventListener(strings.CLOSED_EVENT, bindingContext.handleClosed);
        dialogVm.root.removeEventListener(strings.OPENED_EVENT, bindingContext.handleOpened);
        dialogContainer.remove();
      }
    };

    const dialogContainer = document.createElement('div');
    const def = CustomElement.getDefinition(options.viewModel);
    dialogContainer.innerHTML = `<${def.name}></${def.name}>`;
    document.body.appendChild(dialogContainer);

    const controller = await this.au.enhance({ host: dialogContainer, component: {} });
    const dialogVm = CustomElement.for<MdcDialog>(dialogContainer.querySelector('mdc-dialog') as HTMLElement).viewModel;
    dialogVm.root.addEventListener(strings.CLOSED_EVENT, bindingContext.handleClosed);
    dialogVm.root.addEventListener(strings.OPENED_EVENT, bindingContext.handleOpened);
    const vm = CustomElement.for<T>(dialogContainer.firstChild as HTMLElement).viewModel;
    if (vm.loading) {
      const loadingResult = vm.loading(options.model);
      if (loadingResult instanceof Promise) {
        await loadingResult;
      }
    }
    await dialogVm.initialised;
    dialogVm.open();

    await openedPromise;
    // re-layout ripple elements because dialogs use `transform: scale(.8)` and initial layout is incorrect
    const ripples = Array.from(dialogVm.root.querySelectorAll<IMdcRippleElement>('.mdc-ripple-upgraded'));
    await Promise.all(ripples.map(async x => {
      const ripple = CustomAttribute.for<MdcRipple>(x, 'mdc-ripple');
      await ripple?.viewModel.initialised;
      ripple?.viewModel.foundation?.layout();
    }));
    return await closedPromise;
  }
}
