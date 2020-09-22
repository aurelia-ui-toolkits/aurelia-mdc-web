import { inject, useView, customElement, processContent, ViewCompiler, ViewResources } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { cssClasses } from '@material/list';
import { bindable } from 'aurelia-typed-observable-plugin';

let listItemId = 0;

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';

/**
 * @selector mdc-list-item
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-list-item.html'))
@customElement(cssClasses.LIST_ITEM_CLASS)
@processContent(MdcListItem.processContent)
export class MdcListItem {
  constructor(public root: HTMLElement) { }

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {
    const graphic = element.querySelector('mdc-checkbox:not([mdc-list-item-meta]),[mdc-list-item-graphic]');
    if (graphic) {
      element.removeChild(graphic);
    }
    const meta = element.querySelector('[mdc-list-item-meta]');
    if (meta) {
      element.removeChild(meta);
    }
    const itemText = document.createElement('span');
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
    return true;
  }

  cssClasses = cssClasses;

  id = ++listItemId;

  /** Disables the list item */
  @bindable.booleanAttr
  disabled: boolean;

  /** Styles the row in an activated state */
  @bindable.booleanAttr
  activated: boolean;

  /** Random data associated with the list item. Passed in events payload. */
  @bindable
  value: unknown;

  /** Disables ripple effect */
  @bindable.booleanAttr
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
  au: {
    controller: {
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
