import { customElement, useView, PLATFORM, TaskQueue, inject, DOM } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

const OPEN_CHANGED_EVENT = 'mdcexpandable:open-changed';
const ENTER = 13;
const SPACE = 32;

/** @selector mdc-expandable */
@inject(Element, TaskQueue)
@customElement('mdc-expandable')
@useView(PLATFORM.moduleName('./mdc-expandable.html'))
export class MdcExpandable {
  constructor(public element: HTMLElement, private taskQueue: TaskQueue) { }

  header: HTMLElement;
  content: HTMLElement;
  contentContainer: HTMLElement;
  focused: boolean;

  /** Toggles the expandable open and closed */
  @bindable.booleanAttr
  open: boolean;
  openChanged() {
    this.updateContainerHeight();
    this.element.dispatchEvent(new CustomEvent(
      OPEN_CHANGED_EVENT,
      { detail: { component: this, open: this.open } }
    ));
  }

  /** Set the expandable to be in an accordion group */
  @bindable
  accordion?: string;

  handleEvent(e: Event) {
    switch (e.type) {
      case 'transitionend':
        this.setContentContainerHeightToAuto();
        break;
    }
  }

  setContentContainerHeightToAuto() {
    this.contentContainer.style.overflow = 'visible';
    this.contentContainer.style.height = 'auto';
    this.contentContainer.removeEventListener('transitionend', this);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  bind() { }

  attached() {
    this.openChanged();
  }

  updateContainerHeight() {
    if (this.open) {
      // after transition set body height to auto so that expandable children are visible
      this.contentContainer.addEventListener('transitionend', this);
      this.contentContainer.style.height = `${this.content.clientHeight}px`;
    } else {
      // the following line is needed because height has been restored to auto'
      this.contentContainer.style.height = `${this.content.clientHeight}px`;
      this.taskQueue.queueTask(() => {
        this.contentContainer.style.overflow = 'hidden';
        this.contentContainer.style.height = '0';
      });
    }
  }

  /** Toggles the expandable open and closed */
  toggle() {
    if (!this.open && this.accordion !== undefined) {
      const otherAccordions = this.accordion === ''
        ? Array.from(this.element.parentElement!.querySelectorAll('.mdc-expandable[accordion].mdc-expandable--open'))
        : Array.from(DOM.querySelectorAll(`.mdc-expandable[accordion='${this.accordion}'].mdc-expandable--open`));
      otherAccordions.filter(x => x !== this.element)
        .map(x => (x as IMdcExpandableElement).au.controller.viewModel)
        .forEach(x => x.toggle());
    }
    this.open = !this.open;
  }

  handleFocus() {
    this.focused = true;
  }

  handleBlur() {
    this.focused = false;
  }

  handleKeydown(evt: KeyboardEvent) {
    if ((evt.keyCode === ENTER || evt.keyCode === SPACE)) {
      this.toggle();
    }
    return true;
  }
}

/** @hidden */
export interface IMdcExpandableElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcExpandable;
    };
  };
}

