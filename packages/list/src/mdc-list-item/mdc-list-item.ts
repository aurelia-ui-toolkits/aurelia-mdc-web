import { cssClasses } from '@material/list';
import { customElement, bindable, inject, INode, IPlatform } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import { nextId } from '@aurelia/kernel';
import { processContent } from '@aurelia/runtime-html';

// let listItemId = 0;

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';

/**
 * @selector mdc-list-item
 */
@inject(Element)
@customElement('mdc-list-item')
@processContent(MdcListItem.processContent)
export class MdcListItem {
  constructor(public root: HTMLElement) { }

  static processContent(node: INode, platform: IPlatform) {
    const element = node as HTMLElement;
    const graphic = element.querySelector('mdc-checkbox:not([mdc-list-item-meta]),[mdc-list-item-graphic]');
    if (graphic) {
      element.removeChild(graphic);
    }
    const meta = element.querySelector('[mdc-list-item-meta]');
    if (meta) {
      element.removeChild(meta);
    }
    const itemText = platform.document.createElement('span');
    itemText.classList.add(cssClasses.LIST_ITEM_TEXT_CLASS);
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

  cssClasses = cssClasses;

  id = nextId('mdc-list-item');

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
