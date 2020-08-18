import { useView, customElement, PLATFORM, inject, View } from 'aurelia-framework';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCChipTrailingActionFoundation, MDCChipTrailingActionAdapter, MDCChipTrailingActionInteractionEventDetail, MDCChipTrailingActionNavigationEventDetail } from '@material/chips';
import { strings } from '@material/chips/trailingaction/constants';
import { MdcChip, IMdcChipElement } from '../mdc-chip/mdc-chip';

MDCChipTrailingActionFoundation.strings.NAVIGATION_EVENT = MDCChipTrailingActionFoundation.strings.NAVIGATION_EVENT.toLowerCase();
MDCChipTrailingActionFoundation.strings.INTERACTION_EVENT = MDCChipTrailingActionFoundation.strings.INTERACTION_EVENT.toLowerCase();

let chipTrailingAction = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-trailing-action.html'))
@customElement('mdc-chip-trailing-action')
export class MdcChipTrailingAction extends MdcComponent<MDCChipTrailingActionFoundation> {
    chip: MdcChip;

    constructor(public root: HTMLElement) {
        super(root);
    }

    id: string = `mdc-chip-trailing-action-${++chipTrailingAction}`;

    async attached(): Promise<void> {
        const element = this.root.parentElement?.parentElement;
        if (element) {
          this.chip = (element as IMdcChipElement).au.controller.viewModel;
        }
        return super.attached();
    }

    focus() {
        this.root.focus();
    }

    handleClick_(evt: MouseEvent) {
        this.foundation?.handleClick(evt);
        return true;
    }

    handleKeydown_(evt: KeyboardEvent) {
        this.foundation?.handleKeydown(evt);
        return true;
    }

    getDefaultFoundation(): MDCChipTrailingActionFoundation {
        const adapter: MDCChipTrailingActionAdapter = {
            focus: () => this.root.focus(),
            getAttribute: (attr) => this.root.getAttribute(attr),
            notifyInteraction: (trigger) =>
                this.emit<MDCChipTrailingActionInteractionEventDetail>(
                    strings.INTERACTION_EVENT, {trigger}, true /* shouldBubble */),
            notifyNavigation: (key) => {
              this.emit<MDCChipTrailingActionNavigationEventDetail>(
                  strings.NAVIGATION_EVENT, {key}, true /* shouldBubble */);
            },
            setAttribute: (attr, value) => this.root.setAttribute(attr, value),
          };
          return new MDCChipTrailingActionFoundation(adapter);
    }
}

export interface IMdcChipTrailingActionElement extends HTMLElement {
    au: {
        controller: {
            view: View;
            viewModel: MdcChipTrailingAction;
        };
    };
}