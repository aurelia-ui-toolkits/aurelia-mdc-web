import { cssClasses } from '@material/list';
import { customElement, bindable } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';

let listItemId = 0;

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';

/**
 * @selector mdc-list-item
 */
@customElement(cssClasses.LIST_ITEM_CLASS)
export class MdcListItem {
  constructor(public root: HTMLElement) { }

  cssClasses = cssClasses;

  id = ++listItemId;

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
