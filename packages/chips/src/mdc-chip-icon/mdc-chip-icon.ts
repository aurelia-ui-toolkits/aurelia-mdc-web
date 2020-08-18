import { useView, customElement, PLATFORM, inject, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MdcChip, IMdcChipElement } from '../mdc-chip/mdc-chip';

let chipSetIcon = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-icon.html'))
@customElement('mdc-chip-icon')
export class MdcChipIcon {
    chip: MdcChip;

    constructor(public root: HTMLElement) {
    }

    id: string = `mdc-chip-icon-${++chipSetIcon}`;

    // Indicates that the icon is before the primary action.
    @bindable.booleanAttr
    leading: boolean;

    // Indicates that the icon is after the primary action.
    @bindable.booleanAttr
    trailing: boolean;

    attached() {
        const element = this.root.parentElement?.parentElement;
        if (element) {
          this.chip = (element as IMdcChipElement).au.controller.viewModel;
        }
    }

    focus() {
        this.root.focus();
    }

    handleClick_() {
        this.chip?.handleTrailingIconInteraction();
        return true;
    }

    handleKeydown_() {
        this.chip?.handleTrailingIconInteraction();
        return true;
    }
}

export interface IMdcChipIconElement extends HTMLElement {
    au: {
        controller: {
            view: View;
            viewModel: MdcChipIcon;
        };
    };
}
