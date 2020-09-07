import { useView, customElement, PLATFORM, inject, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

let chipSetIcon = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-icon.html'))
@customElement('mdc-chip-icon')
export class MdcChipIcon {
  constructor(public root: HTMLElement) { }

  id: string = `mdc-chip-icon-${++chipSetIcon}`;

  // Indicates that the icon is before the primary action.
  @bindable.booleanAttr
  leading: boolean;

  // Indicates that the icon is after the primary action.
  @bindable.booleanAttr
  trailing: boolean;
}

/** @hidden */
export interface IMdcChipIconElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcChipIcon;
    };
  };
}
