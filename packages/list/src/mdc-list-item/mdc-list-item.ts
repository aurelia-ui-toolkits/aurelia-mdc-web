import { cssClasses } from '@material/list';
import { customElement, bindable, inject } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import { nextId } from '@aurelia/kernel';

// let listItemId = 0;

const ENTER = 13;
const SPACE = 32;
const LIST_ITEM_ACTION = 'mdclistitem:action';

/**
 * @selector mdc-list-item
 */
@inject(Element)
 @customElement('mdc-list-item')
export class MdcListItem {
  constructor(public root: HTMLElement) { }

  cssClasses = cssClasses;

  id =  nextId('mdc-list-item');

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

export interface IMdcListActionEventDetail {
  index: number;
  data: unknown;
}

/** @hidden */
export interface IMdcListActionEvent extends Event {
  detail: IMdcListActionEventDetail;
}
