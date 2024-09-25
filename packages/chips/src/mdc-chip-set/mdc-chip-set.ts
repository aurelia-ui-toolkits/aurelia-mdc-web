import { inject, customElement, bindable, slotted, CustomElement } from 'aurelia';
import { MDCChipSetFoundation, MDCChipSetAdapter, MDCChipSetEvents } from '@material/chips';
import { announce } from '@material/dom/announce';
import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MdcChip } from '../mdc-chip/mdc-chip';
import { ChipAnimationEvent, ChipInteractionEvent, ChipNavigationEvent } from '@material/chips/chip-set/types';
import template from './mdc-chip-set.html?raw';

(MDCChipSetEvents as Record<string, string>).INTERACTION = MDCChipSetEvents.INTERACTION.toLowerCase();
(MDCChipSetEvents as Record<string, string>).REMOVAL = MDCChipSetEvents.REMOVAL.toLowerCase();
(MDCChipSetEvents as Record<string, string>).SELECTION = MDCChipSetEvents.SELECTION.toLowerCase();

let chipSetId = 0;

@inject(Element)
@customElement({ name: 'mdc-chip-set', template })
export class MdcChipSet extends MdcComponent<MDCChipSetFoundation> {

  id: string = `mdc-chip-set-${++chipSetId}`;

  /**
   * Causes the chips to overflow instead of wrap (their default behavior).
   */
  @bindable({ set: booleanAttr })
  overflow: boolean;

  @slotted({ query: 'mdc-chip' })
  chipElements: HTMLElement[];

  get chips(): MdcChip[] {
    return (this.chipElements ?? []).map(x => CustomElement.for<MdcChip>(x).viewModel);
  }

  handleChipInteraction(event: ChipInteractionEvent) {
    this.foundation?.handleChipInteraction(event);
  }

  handleChipAnimation(event: ChipAnimationEvent) {
    this.foundation?.handleChipAnimation(event);
  }

  handleChipNavigation(event: ChipNavigationEvent) {
    this.foundation?.handleChipNavigation(event);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCChipSetAdapter = {
      announceMessage: (message) => {
        announce(message);
      },
      emitEvent: (eventName, eventDetail) => {
        this.emit(eventName, eventDetail, true /* shouldBubble */);
      },
      getAttribute: (attrName) => this.root.getAttribute(attrName),
      getChipActionsAtIndex: (index) => {
        if (!this.isIndexValid(index)) { return []; }
        return this.chips[index].getActions();
      },
      getChipCount: () => this.chips.length,
      getChipIdAtIndex: (index) => {
        if (!this.isIndexValid(index)) { return ''; }
        return this.chips[index].getElementID();
      },
      getChipIndexById: (id) =>
        this.chips.findIndex((chip) => chip.getElementID() === id),
      isChipFocusableAtIndex: (index, action) => {
        if (!this.isIndexValid(index)) { return false; }
        return this.chips[index].isActionFocusable(action);
      },
      isChipSelectableAtIndex: (index, action) => {
        if (!this.isIndexValid(index)) { return false; }
        return this.chips[index].isActionSelectable(action);
      },
      isChipSelectedAtIndex: (index, action) => {
        if (!this.isIndexValid(index)) { return false; }
        return this.chips[index].isActionSelected(action);
      },
      removeChipAtIndex: (index) => {
        if (!this.isIndexValid(index)) { return; }
        this.chips[index].destroy();
        this.chips[index].remove();
        this.chips.splice(index, 1);
      },
      setChipFocusAtIndex: (index, action, focus) => {
        if (!this.isIndexValid(index)) { return; }
        this.chips[index].setActionFocus(action, focus);
      },
      setChipSelectedAtIndex: (index, action, selected) => {
        if (!this.isIndexValid(index)) { return; }
        this.chips[index].setActionSelected(action, selected);
      },
      startChipAnimationAtIndex: (index, animation) => {
        if (!this.isIndexValid(index)) { return; }
        this.chips[index].startAnimation(animation);
      },
    };

    // Default to the primary foundation
    return new MDCChipSetFoundation(adapter);
  }

  private isIndexValid(index: number): boolean {
    return index > -1 && index < this.chips.length;
  }
}

/** @hidden */
export interface IMdcChipSetElement extends HTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcChipSet;
    };
  };
}
