import { inject, useView, customElement } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { cssClasses } from '@material/list';
import { bindable } from 'aurelia-typed-observable-plugin';

let listItemId = 0;

const ENTER = 13;
const SPACE = 32;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-list-item.html'))
@customElement(cssClasses.LIST_ITEM_CLASS)
export class MdcListItem {
  constructor(private root: HTMLElement) { }

  cssClasses = cssClasses;

  id = ++listItemId;

  @bindable
  role: string;

  @bindable.booleanAttr
  disabled: boolean;

  @bindable.booleanAttr
  activated: boolean;

  @bindable
  value: unknown;

  initialSyncWithDOM() {
    if (this.role) {
      this.root.setAttribute('role', this.role);
    }
  }

  onKeydown(evt: KeyboardEvent) {
    if ((evt.keyCode === ENTER || evt.keyCode === SPACE) && !this.disabled) {
      this.root.dispatchEvent(new CustomEvent('selection-change', { detail: { item: this } }));
    }
    return true;
  }

}

export interface IMdcListItemElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcListItem;
    }
  }
}
