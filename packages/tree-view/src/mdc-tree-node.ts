import { inject, bindable, noView, ViewSlot, customElement, ViewFactory, View, Container } from 'aurelia-framework';

@inject(Element, Container)
@customElement('mdc-tree-node')
@noView()
export class TreeNode {
  constructor(private element: Element, private container: Container) {
    this.viewSlot = new ViewSlot(this.element, true);
  }

  viewSlot: ViewSlot;
  view: View;

  @bindable
  factory: ViewFactory;

  @bindable
  rootBindingContext: Record<string, unknown>;

  built: boolean;

  bind(bindingContext: Record<string, unknown>) {
    this.build();
    this.viewSlot.bind(bindingContext, this.rootBindingContext);
  }

  afterAttach() {
    this.viewSlot.afterAttach();
  }

  detached() {
    this.viewSlot.detached();
  }

  unbind() {
    this.viewSlot.unbind();
  }

  private build() {
    if (this.built) {
      return;
    }
    this.built = true;
    if (!this.factory) {
      return;
    }
    this.view = this.factory.create(this.container);
    this.viewSlot.add(this.view);
  }
}
