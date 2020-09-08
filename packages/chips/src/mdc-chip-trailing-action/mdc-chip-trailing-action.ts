import { useView, customElement, PLATFORM, inject, View } from 'aurelia-framework';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCChipTrailingActionFoundation, MDCChipTrailingActionAdapter, MDCChipTrailingActionInteractionEventDetail, MDCChipTrailingActionNavigationEventDetail } from '@material/chips';
import { strings } from '@material/chips/trailingaction/constants';

MDCChipTrailingActionFoundation.strings.NAVIGATION_EVENT = MDCChipTrailingActionFoundation.strings.NAVIGATION_EVENT.toLowerCase();
MDCChipTrailingActionFoundation.strings.INTERACTION_EVENT = MDCChipTrailingActionFoundation.strings.INTERACTION_EVENT.toLowerCase();

let chipTrailingAction = 0;

/**
 * Optional. Placed inside mdc-chip to add an action which should be accessible via keyboard navigation.
 * Used implicitly if mdc-chip[trailing-action] is set.
 * @selector mdc-chip-trailing-action
 */
@inject(Element)
@useView(PLATFORM.moduleName('./mdc-chip-trailing-action.html'))
@customElement('mdc-chip-trailing-action')
export class MdcChipTrailingAction extends MdcComponent<MDCChipTrailingActionFoundation> {
  id: string = `mdc-chip-trailing-action-${++chipTrailingAction}`;

  /** Set focus to the action */
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
          strings.INTERACTION_EVENT, { trigger }, true /* shouldBubble */),
      notifyNavigation: (key) => {
        this.emit<MDCChipTrailingActionNavigationEventDetail>(
          strings.NAVIGATION_EVENT, { key }, true /* shouldBubble */);
      },
      setAttribute: (attr, value) => this.root.setAttribute(attr, value),
    };
    return new MDCChipTrailingActionFoundation(adapter);
  }

  isNavigable() {
    return this.foundation?.isNavigable();
  }

  /** Remove focus from the action */
  removeFocus() {
    this.foundation?.removeFocus();
  }
}

/** @hidden */
export interface IMdcChipTrailingActionElement extends HTMLElement {
  au: {
    controller: {
      view: View;
      viewModel: MdcChipTrailingAction;
    };
  };
}
