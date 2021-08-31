import { inject, useView, customElement, processContent, ViewCompiler, ViewResources } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { bindable } from 'aurelia-typed-observable-plugin';

let listItemId = 0;

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';

/**
 * @selector mdc-deprecated-list-item
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-deprecated-list-item.html'))
@customElement('mdc-deprecated-list-item')
@processContent(MdcDeprecatedListItem.processContent)
export class MdcDeprecatedListItem {
  constructor(public root: HTMLElement) { }

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element) {
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
    return true;
  }

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
