import { useView, inject, PLATFORM, customElement, children, View } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import {
  MDCChipSetFoundation, MDCChipSetAdapter, MDCChip,
  MDCChipInteractionEventDetail, MDCChipSelectionEventDetail, MDCChipRemovalEventDetail, MDCChipNavigationEventDetail
} from '@material/chips';
import { announce } from '@material/dom/announce';
import { MdcComponent } from '@aurelia-mdc-web/base';

let chipSetId = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-set.html'))
@customElement('mdc-chip-set')
export class MdcChipSet extends MdcComponent<MDCChipSetFoundation> {

  id: string = `mdc-chip-set-${++chipSetId}`;

  /**
   * Indicates that the chips in the set are choice chips, which allow a single selection from a set of options.
   */
  @bindable.booleanAttr
  choice: boolean;

  /**
   * Indicates that the chips in the set are filter chips, which allow multiple selection from a set of options.
   */
  @bindable.booleanAttr
  filter: boolean;

  /**
   * Indicates that the chips in the set are input chips, which enable user input by converting text into chips.
   */
  @bindable.booleanAttr
  input: boolean;

  // a list of MDC chips
  @children('mdc-chip')
  chips: MDCChip[];

  handleChipInteraction_(eventDetail: MDCChipInteractionEventDetail) {
    this.foundation?.handleChipInteraction(eventDetail);
  }

  handleChipSelection_(eventDetail: MDCChipSelectionEventDetail) {
    this.foundation?.handleChipSelection(eventDetail);
  }

  handleChipRemoval_(eventDetail: MDCChipRemovalEventDetail) {
    this.foundation?.handleChipRemoval(eventDetail);
  }

  handleChipNavigation_(eventDetail: MDCChipNavigationEventDetail) {
    this.foundation?.handleChipNavigation(eventDetail);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCChipSetAdapter = {
      hasClass: (className: string) => this.root.classList.contains(className),
      removeChipAtIndex: (index: number) => {
        if (index >= 0 && index < this.chips.length) {
          this.chips[index].destroy();
          this.chips.splice(index, 1);
        }
      },
      selectChipAtIndex: (index: number, isSelected: boolean, shouldNotifyClients: boolean) => {
        if (index >= 0 && index < this.chips.length) {
          this.chips[index].setSelectedFromChipSet(isSelected, shouldNotifyClients);
        }
      },
      getIndexOfChipById: (chipId: string): number => {
        return this.chips.findIndex(_ => _.id === chipId);
      },
      focusChipPrimaryActionAtIndex: (index: number) => this.chips[index]?.focusPrimaryAction(),
      focusChipTrailingActionAtIndex: (index: number) => this.chips[index]?.focusTrailingAction(),
      removeFocusFromChipAtIndex: (index: number) => this.chips[index]?.removeFocus(),
      isRTL: () => typeof window !== 'undefined' ? window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl' : false,
      getChipListCount: (): number => this.chips.length,
      announceMessage: (message: string) => announce(message)
    };
    const foundation = new MDCChipSetFoundation(adapter);
    return foundation;
  }
}

/** @hidden */
export interface IMdcChipSetElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcChipSet;
    };
  };
}
