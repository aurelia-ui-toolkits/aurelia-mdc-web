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
    const texts = element.querySelectorAll('mdc-list-item-overline-text, mdc-list-item-primary-text, mdc-list-item-secondary-text, template');
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

  /** Styles the row in an selected state */
  @bindable.booleanAttr
  selected: boolean;

  /** Indicates a non-interactive item */
  @bindable.booleanAttr
  nonInteractive: boolean;

  /** Indicates a two-line item */
  @bindable.booleanAttr
  twoLine: boolean;

  /** Indicates a three-line item */
  @bindable.booleanAttr
  threeLine: boolean;

  /** Random data associated with the list item. Passed in events payload. */
  @bindable
  value: unknown;

  /** Disables ripple effect */
  @bindable.booleanAttr
  disableRipple: boolean;

  // this is necessary for the route-href to work
  @bindable
  href: string;
  hrefChanged() {
    if (this.href) {
      this.root.setAttribute('href', this.href);
    } else {
      this.root.removeAttribute('href');
    }
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
