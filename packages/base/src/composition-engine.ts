import { CustomElement, CustomElementDefinition, LifecycleFlags } from '@aurelia/runtime-html';
import { Constructable, Controller, IContainer } from 'aurelia';

export interface ICompositionOptions<T extends Record<string, unknown>> {
  viewModel: T | Constructable<T>;
  view: string;
}

export class CompositionEngine {
  public static inject = [IContainer];

  constructor(
    private container: IContainer,
  ) {

  }

  public compose<T extends Record<string, unknown> = Record<string, unknown>>(options: ICompositionOptions<T>) {
    const def = CustomElementDefinition.create({ name: CustomElement.generateName(), template: options.view, containerless: true });
    const container = this.container.createChild();
    // const instanceFactory = container.getFactory(Ctor);
    const instance = this.ensureInstance(container, options.viewModel);
    const dialogContainer = document.body.appendChild(document.createElement('div'));

    const controller = Controller.forCustomElement(
      null,
      container,
      instance,
      dialogContainer,
      null,
      LifecycleFlags.none,
      true,
      def,
    );

    controller.activate(controller, null, LifecycleFlags.fromBind, controller.scope);
  }

  private ensureInstance(container: IContainer, objectOrCtor: Record<string, unknown> | Constructable): Record<string, unknown> {
    return typeof objectOrCtor === 'function'
      ? container.getFactory(objectOrCtor).construct(container)
      : objectOrCtor;
  }
}
