import { inject, customElement, children, bindable } from 'aurelia';
import {
  MDCChipSetFoundation, MDCChipSetAdapter, MDCChip,
  MDCChipInteractionEventDetail, MDCChipSelectionEventDetail, MDCChipRemovalEventDetail, MDCChipNavigationEventDetail
} from '@material/chips';
import { announce } from '@material/dom/announce';
import { MdcComponent, booleanAttr, defaultSlotProcessContent } from '@aurelia-mdc-web/base';
import { processContent } from '@aurelia/runtime-html';

let chipSetId = 0;

@inject(Element)
@customElement('mdc-chip-set')
@processContent(defaultSlotProcessContent)
export class MdcChipSet extends MdcComponent<MDCChipSetFoundation> {

  id: string = `mdc-chip-set-${++chipSetId}`;

  /**
   * Indicates that the chips in the set are choice chips, which allow a single selection from a set of options.
   */
  @bindable({ set: booleanAttr })
  choice: boolean;

  /**
   * Indicates that the chips in the set are filter chips, which allow multiple selection from a set of options.
   */
  @bindable({ set: booleanAttr })
  filter: boolean;

  /**
   * Indicates that the chips in the set are input chips, which enable user input by converting text into chips.
   */
  @bindable({ set: booleanAttr })
  input: boolean;

  // a list of MDC chips
  @children({ query: controller => controller.host.querySelectorAll('mdc-chip') })
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
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcChipSet;
    };
  };
}
