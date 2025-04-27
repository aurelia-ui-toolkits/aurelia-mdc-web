import { cssClasses, strings } from '@material/list';
import { customElement, bindable, inject, INode } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import { processContent } from '@aurelia/runtime-html';
import template from './mdc-list-item.html?raw';

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';
let id = 0;

/**
 * @selector mdc-list-item
 */
@inject(Element)
@customElement({ name: 'mdc-list-item', template })
@processContent(function processContent(node: INode) {
  const element = node as HTMLElement;
  const leading = element.querySelector('[mdc-list-item-leading]');
  if (leading) {
    element.removeChild(leading);
  }
  const trailing = element.querySelector('[mdc-list-item-trailing]');
  if (trailing) {
    element.removeChild(trailing);
  }
  const content = document.createElement('span');
  content.classList.add('mdc-list-item__content');
  const texts = element.querySelectorAll('mdc-list-item-overline-text, mdc-list-item-primary-text, mdc-list-item-secondary-text, au-slot');
  const children = Array.from(element.childNodes);
  if (!texts.length) {
    const primary = document.createElement('span');
    primary.classList.add('mdc-list-item__primary-text');
    for (let i = 0; i < children.length; ++i) {
      primary.appendChild(children[i]);
    }
    content.appendChild(primary);
  } else {
    for (let i = 0; i < children.length; ++i) {
      content.appendChild(children[i]);
    }
  }
  if (leading) {
    const start = document.createElement('span');
    start.classList.add('mdc-list-item__start');
    start.appendChild(leading);
    element.appendChild(start);
  }
  element.appendChild(content);
  if (trailing) {
    const end = document.createElement('span');
    end.classList.add('mdc-list-item__end');
    end.appendChild(trailing);
    element.appendChild(end);
  }
}
)
export class MdcListItem {
  constructor(public root: HTMLElement) { }

  cssClasses = cssClasses;

  id = `mdc-list-item-${++id}`;

  /** Disables the list item */
  @bindable({ set: booleanAttr })
  disabled: boolean;

  /** Styles the row in an activated state */
  @bindable({ set: booleanAttr })
  activated: boolean;

  /** Styles the row in an selected state */
  @bindable({ set: booleanAttr })
  selected: boolean;

  /** Indicates a non-interactive item */
  @bindable({ set: booleanAttr })
  nonInteractive: boolean;

  /** Indicates a two-line item */
  @bindable({ set: booleanAttr })
  twoLine: boolean;

  /** Indicates a three-line item */
  @bindable({ set: booleanAttr })
  threeLine: boolean;

  /** Random data associated with the list item. Passed in events payload. */
  @bindable()
  value: unknown;

  /** Disables ripple effect */
  @bindable({ set: booleanAttr })
  disableRipple: boolean;

  attached() {
    // Child button/a elements are not tabbable until the list item is focused.
    Array.from(this.root.querySelectorAll(strings.FOCUSABLE_CHILD_ELEMENTS))
      .forEach(el => el.setAttribute('tabindex', '-1'));
  }

  onKeydown(evt: KeyboardEvent) {
    if ((evt.keyCode === ENTER || evt.keyCode === SPACE) && !this.disabled) {
      this.root.dispatchEvent(new CustomEvent(LIST_ITEM_ACTION, { detail: { item: this, data: this.value }, bubbles: true }));
    }
    return true;
  }

  onClick() {
    if (!this.disabled) {
      this.root.dispatchEvent(new CustomEvent(LIST_ITEM_ACTION, { detail: { item: this, data: this.value }, bubbles: true }));
    }
    return true;
  }

}

/** @hidden */
export interface IMdcListItemElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcListItem;
    };
  };
}

export interface IMdcListActionEventDetail {
  index: number;
  data: unknown;
}

/** @hidden */
export interface IMdcListActionEvent extends Event {
  detail: IMdcListActionEventDetail;
}
