import { cssClasses, strings } from '@material/list';
import { customElement, bindable, inject, INode } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import { processContent } from '@aurelia/runtime-html';
import template from './mdc-deprecated-list-item.html';

// let listItemId = 0;

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';
let id = 0;

/**
 * @selector mdc-deprecated-list-item
 */
@inject(Element)
@customElement({ name: 'mdc-deprecated-list-item', template })
@processContent(function processContent(node: INode) {
  const element = node as HTMLElement;
  const graphic = element.querySelector('mdc-checkbox:not([mdc-deprecated-list-item-meta]),[mdc-deprecated-list-item-graphic]');
  if (graphic) {
    element.removeChild(graphic);
  }
  const meta = element.querySelector('[mdc-deprecated-list-item-meta]');
  if (meta) {
    element.removeChild(meta);
  }
  const itemText = document.createElement('span');
  itemText.classList.add('mdc-deprecated-list-item__text');
  const children = [].slice.call(element.childNodes) as ChildNode[];
  for (let i = 0; i < children.length; ++i) {
    itemText.appendChild(children[i]);
  }
  if (graphic) {
    element.appendChild(graphic);
  }
  element.appendChild(itemText);
  if (meta) {
    element.appendChild(meta);
  }
}
)
export class MdcDeprecatedListItem {
  constructor(public root: HTMLElement) {
    this.root.id = `mdc-deprecated-list-item-${this.id}`;
  }

  cssClasses = cssClasses;

  id = `mdc-deprecated-list-item-${++id}`;

  /** Disables the list item */
  @bindable({ set: booleanAttr })
  disabled: boolean;

  /** Styles the row in an activated state */
  @bindable({ set: booleanAttr })
  activated: boolean;

  /** Random data associated with the list item. Passed in events payload. */
  @bindable
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
      viewModel: MdcDeprecatedListItem;
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
