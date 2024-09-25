import { customElement, inject, bindable, IPlatform } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import { CustomElement } from '@aurelia/runtime-html';
import template from './mdc-expandable.html?raw';

const OPEN_CHANGED_EVENT = 'mdcexpandable:open-changed';
const ENTER = 13;
const SPACE = 32;

/** @selector mdc-expandable */
@inject(Element, IPlatform)
@customElement({ name: 'mdc-expandable', template })
export class MdcExpandable {
  constructor(public element: HTMLElement, private platform: IPlatform) { }

  header?: HTMLElement = undefined;
  content?: HTMLElement = undefined;
  contentContainer?: HTMLElement = undefined;
  focused: boolean;

  /** Toggles the expandable open and closed */
  @bindable({ set: booleanAttr })
  open: boolean;
  openChanged() {
    this.updateContainerHeight();
    this.element.dispatchEvent(new CustomEvent(
      OPEN_CHANGED_EVENT,
      { detail: { component: this, open: this.open } }
    ));
  }

  /** Set the expandable to be in an accordion group */
  @bindable()
  accordion?: string;

  handleEvent(e: Event) {
    switch (e.type) {
      case 'transitionend':
        this.setContentContainerHeightToAuto();
        break;
    }
  }

  setContentContainerHeightToAuto() {
    this.contentContainer!.style.overflow = 'visible';
    this.contentContainer!.style.height = 'auto';
    this.contentContainer!.removeEventListener('transitionend', this);
  }

  attached() {
    this.openChanged();
  }

  updateContainerHeight() {
    if (this.open) {
      // after transition set body height to auto so that expandable children are visible
      this.contentContainer!.addEventListener('transitionend', this);
      this.contentContainer!.style.height = `${this.content!.clientHeight}px`;
    } else {
      // the following line is needed because height has been restored to auto'
      this.contentContainer!.style.height = `${this.content!.clientHeight}px`;
      this.platform.taskQueue.queueTask(() => {
        this.contentContainer!.style.overflow = 'hidden';
        this.contentContainer!.style.height = '0';
      });
    }
  }

  /** Toggles the expandable open and closed */
  toggle() {
    if (!this.open && this.accordion !== undefined) {
      const otherAccordions = Array.from(this.element.parentElement!.querySelectorAll(`.mdc-expandable--accordion__${this.accordion}.mdc-expandable--open`));
      otherAccordions.filter(x => x !== this.element)
        .map(x => CustomElement.for<MdcExpandable>(x).viewModel)
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
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcExpandable;
    };
  };
}

