import { inject, useView, customElement } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { cssClasses } from '@material/list';

let listItemId = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-list-item.html'))
@customElement(cssClasses.LIST_ITEM_CLASS)
export class MdcListItem {
  cssClasses = cssClasses;

  id = ++listItemId;
}
