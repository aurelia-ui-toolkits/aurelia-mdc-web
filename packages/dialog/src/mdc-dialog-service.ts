import { IMdcDialogElement, MdcDialog } from './mdc-dialog';
import { TemplatingEngine, inject, ViewSlot, ShadowDOM, CompositionContext, ViewResources, Controller, CompositionEngine, Container } from 'aurelia-framework';
import { strings, MDCDialogCloseEvent } from '@material/dialog';

/** Dialog service open method options */
export interface IMdcDialogOptions {
  /** A class represeting the dialog content view model */
  viewModel: unknown;

  /** Data to pass to the view model's activate method */
  model?: unknown;

  /** A css class to customise a dialog opened via the service */
  class?: string;
}

declare module 'aurelia-templating' {
  interface View {
    controllers: Controller[];
    slots: ShadowSlot[];
  }

  interface ShadowSlot {
    anchor: Node;
  }
}

interface IMdcDialogBindingContext {
  currentViewModel?: {
    canDeactivate?: (result: unknown) => unknown;
    deactivate?: (result: unknown) => unknown;
    detached?: (result: unknown) => unknown;
  };
  handleClosing(evt: MDCDialogCloseEvent): void;
  handleOpened(): void;
}

/** Service to open MDC dialogs */
@inject(TemplatingEngine, ViewResources, CompositionEngine)
export class MdcDialogService {
  constructor(private templatingEngine: TemplatingEngine, private viewResources: ViewResources,
    private compositionEngine: CompositionEngine) { }

  /** Opens the dialog specified in the options */
  async open(options: IMdcDialogOptions) {
    const dialog = document.createElement('mdc-dialog') as IMdcDialogElement;
    dialog.setAttribute(`${strings.CLOSING_EVENT}.trigger`, 'handleClosing($event)');
    dialog.setAttribute(`${strings.OPENED_EVENT}.trigger`, 'handleOpened()');
    dialog.setAttribute('delay-focus-trap', 'delay-focus-trap');
    if (options.class) {
      dialog.classList.add(options.class);
    }
    document.body.appendChild(dialog);
    let closingResolver: (action?: string) => void;
    const closingPromise = new Promise<string>(r => closingResolver = r);
    let openedResolver: () => void;
    const openedPromise = new Promise<void>(r => openedResolver = r);
    const bindingContext: IMdcDialogBindingContext = {
      handleClosing: (evt: MDCDialogCloseEvent) => {
        closingResolver(evt.detail.action);
        childView.detached();
        dialog.remove();
      },
      handleOpened: () => {
        openedResolver();
      }
    };
    const childView = this.templatingEngine.enhance({ element: dialog, bindingContext });
    const controllers = childView.controllers;
    const view = controllers[0].view;
    const slot = new ViewSlot(view.slots[ShadowDOM.defaultSlotKey].anchor, false);
    slot.attached();
    childView.container.registerInstance(MdcDialog, dialog.au.controller.viewModel);

    const dialogVm = dialog.au.controller.viewModel;
    await dialogVm.initialised;
    dialogVm.open();
    await openedPromise;

    // add content only after the dialog has opened to avoid layout issues
    let compositionContext = this.createCompositionContext(childView.container, dialog, bindingContext, {
      viewModel: options.viewModel,
      model: options.model
    }, slot);
    compositionContext = await this.ensureViewModel(compositionContext);
    const canActivate = compositionContext.viewModel ? await invokeLifecycle(compositionContext.viewModel, 'canActivate', options.model) : true;
    if (!canActivate) {
      throw new Error('modal cannot be opened');
    }
    const controller = await this.compositionEngine.compose(compositionContext);
    bindingContext.currentViewModel = (controller as Controller).viewModel;
    // instantiate focus trap manually after the content has been added because it need at least one focusable element
    dialogVm.createFocusTrap();
    dialogVm.focusTrap_?.trapFocus();

    return closingPromise;
  }

  private createCompositionContext(container: Container, host: Element, bindingContext: IMdcDialogBindingContext,
    settings: { model?: unknown; view?: string; viewModel?: unknown }, slot?: ViewSlot): CompositionContext {
    return {
      container,
      bindingContext: settings.viewModel ? null : bindingContext,
      viewResources: this.viewResources,
      model: settings.model,
      view: settings.view,
      viewModel: settings.viewModel,
      viewSlot: slot ?? new ViewSlot(host, true),
      host
    };
  }

  private async ensureViewModel(compositionContext: CompositionContext): Promise<CompositionContext> {
    if (compositionContext.viewModel === undefined) {
      return Promise.resolve(compositionContext);
    }
    if (typeof compositionContext.viewModel === 'object') {
      return Promise.resolve(compositionContext);
    }
    return this.compositionEngine.ensureViewModel(compositionContext);
  }

}

export type LifecycleMethodName = 'canActivate' | 'activate' | 'canDeactivate' | 'deactivate';

export async function invokeLifecycle(instance: Record<string, unknown>, name: LifecycleMethodName, model?: unknown): Promise<unknown> {
  if (typeof instance[name] === 'function') {
    return new Promise(resolve => {
      resolve((instance[name] as (model: unknown) => void)(model));
    }).then(result => {
      if (result !== null && result !== undefined) {
        return result;
      }
      return true;
    });
  }
  return Promise.resolve(true);
}

