import { inject, useView, customElement, processContent, ViewCompiler, ViewResources, BehaviorInstruction } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { cssClasses } from '@material/list';
import { bindable } from 'aurelia-typed-observable-plugin';

let listItemId = 0;

const ENTER = 13;
const SPACE = 32;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-list-item.html'))
@customElement(cssClasses.LIST_ITEM_CLASS)
@processContent(MdcListItem.processContent)
export class MdcListItem {
  constructor(private root: HTMLElement) { }

  static processContent(_viewCompiler: ViewCompiler, _resources: ViewResources, element: Element, _instruction: BehaviorInstruction) {
    const graphic = element.querySelector('[mdc-list-item-graphic]');
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
