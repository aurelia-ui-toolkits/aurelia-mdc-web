import { IMdcDialogElement } from './mdc-dialog';
import { TemplatingEngine, inject, ViewSlot, ShadowDOM, CompositionContext, ViewResources, Controller, CompositionEngine, Container } from 'aurelia-framework';
import { strings, MDCDialogCloseEvent } from '@material/dialog';

export interface IMdcDialogOptions {
  viewModel: unknown;
  model?: unknown;
}

interface IMdcDialogBindingContext {
  currentViewModel?: {
    canDeactivate?: (result: any) => any;
    deactivate?: (result: any) => any;
    detached?: (result: any) => any;
  };
  handleClosing(evt: MDCDialogCloseEvent): void;
}

@inject(TemplatingEngine, ViewResources, CompositionEngine)
export class MdcDialogService {
  constructor(private templatingEngine: TemplatingEngine, private viewResources: ViewResources,
    private compositionEngine: CompositionEngine) { }

  async open(options: IMdcDialogOptions) {
    const dialog = document.createElement('mdc-dialog') as IMdcDialogElement;
    dialog.setAttribute(`${strings.CLOSING_EVENT}.trigger`, 'handleClosing($event)')
    document.body.appendChild(dialog);
    let closingResolver: (action?: string) => void;
    const closingPromise = new Promise<string>(r => closingResolver = r);
    const bindingContext: IMdcDialogBindingContext = {
      handleClosing: (evt: MDCDialogCloseEvent) => {
        closingResolver(evt.detail.action);
        childView.detached();
        dialog.remove();
      }
    };
    const childView = this.templatingEngine.enhance({ element: dialog, bindingContext });
    const controllers = (childView as any).controllers as Controller[];
    const view: any = controllers[0].view;
    const slot = new ViewSlot(view.slots[ShadowDOM.defaultSlotKey].anchor, false);
    slot.attached();
    let compositionContext = this.createCompositionContext(childView.container, dialog, bindingContext, {
      viewModel: options.viewModel,
      model: options.model
    }, slot);
    compositionContext = await this.ensureViewModel(compositionContext);
    const canActivate = compositionContext.viewModel ? await invokeLifecycle(compositionContext.viewModel, 'canActivate', options.model) : true;
    if (!canActivate) {
      throw new Error('modal cannot be opened');
    }
    this.compositionEngine.compose(compositionContext).then((controller) => {
      bindingContext.currentViewModel = (controller as Controller).viewModel;
    });

    await dialog.au.controller.viewModel.initialised;
    dialog.au.controller.viewModel.open();
    return closingPromise;
  }

  private createCompositionContext(container: Container, host: Element, bindingContext: IMdcDialogBindingContext,
    settings: { model?: any, view?: any, viewModel?: any }, slot?: ViewSlot): CompositionContext {
    return {
      container,
      bindingContext: settings.viewModel ? null : bindingContext,
      viewResources: this.viewResources,
      model: settings.model,
      view: settings.view,
      viewModel: settings.viewModel,
      viewSlot: slot || new ViewSlot(host, true),
      host
    };
  }

  private ensureViewModel(compositionContext: CompositionContext): Promise<CompositionContext> {
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

export function invokeLifecycle(instance: object, name: LifecycleMethodName, model?: any): Promise<any> {
  if (typeof (instance as any)[name] === 'function') {
    return new Promise(resolve => {
      resolve((instance as any)[name](model));
    }).then(result => {
      if (result !== null && result !== undefined) {
        return result;
      }
      return true;
    });
  }
  return Promise.resolve(true);
}

