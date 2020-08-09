import { useView, customElement, PLATFORM, inject } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

let chipSetIcon = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-icon.html'))
@customElement("mdc-chip-icon")
export class MdcChipIcon {

    constructor(public element: HTMLElement) {
    }

    id: string = `mdc-chip-set-${++chipSetIcon}`;

    // Indicates that the chips in the set are choice chips, which allow a single selection from a set of options.
    @bindable.booleanAttr
    leading: boolean;

    // Indicates that the chips in the set are filter chips, which allow multiple selection from a set of options.
    @bindable.booleanAttr
    trailing: boolean;

    focus() {
        this.element.focus();
    }
}