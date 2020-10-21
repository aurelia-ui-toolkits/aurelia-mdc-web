import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCTabFoundation, MDCTabAdapter, MDCTabInteractionEventDetail, MDCTabDimensions } from '@material/tab';
import { MdcTabIndicator } from '../indicator/mdc-tab-indicator';
import { inject, customElement, bindable } from 'aurelia';

let tabId = 0;

MDCTabFoundation.strings.INTERACTED_EVENT = MDCTabFoundation.strings.INTERACTED_EVENT.toLowerCase();

@inject(Element)
@customElement('mdc-tab')
export class MdcTab extends MdcComponent<MDCTabFoundation> {
  private tabIndicator_: MdcTabIndicator; // assigned in initialize();
  private content_: HTMLElement; // assigned in initialize();

  @bindable
  id: string = `mdc-tab-${++tabId}`;

  @bindable({ set: booleanAttr })
  fixed: boolean;

  @bindable({ set: booleanAttr })
  active: boolean;

  @bindable
  icon: string;

  @bindable
  label: string;

  @bindable({ set: booleanAttr })
  minWidth: boolean;

  @bindable({ set: booleanAttr })
  fade: boolean;

  @bindable({ set: booleanAttr })
  stacked: boolean;

  @bindable
  indicatorIcon: string;

  handleClick_() {
    this.foundation?.handleClick();
    return true;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTabAdapter = {
      setAttr: (attr, value) => this.root.setAttribute(attr, value),
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      activateIndicator: (previousIndicatorClientRect) => this.tabIndicator_.activate(previousIndicatorClientRect),
      deactivateIndicator: () => this.tabIndicator_.deactivate(),
      notifyInteracted: () => this.emit<MDCTabInteractionEventDetail>(MDCTabFoundation.strings.INTERACTED_EVENT, { tabId: this.id }, true /* bubble */),
      getOffsetLeft: () => this.root.offsetLeft,
      getOffsetWidth: () => this.root.offsetWidth,
      getContentOffsetLeft: () => this.content_.offsetLeft,
      getContentOffsetWidth: () => this.content_.offsetWidth,
      focus: () => this.root.focus(),
    };
    return new MDCTabFoundation(adapter);
  }

  isActive(): boolean {
    return this.foundation!.isActive();
  }

  set focusOnActivate(focusOnActivate: boolean) {
    this.foundation?.setFocusOnActivate(focusOnActivate);
  }

  /**
   * Activates the tab
   */
  activate(computeIndicatorClientRect?: ClientRect) {
    this.foundation?.activate(computeIndicatorClientRect);
  }

  /**
   * Deactivates the tab
   */
  deactivate() {
    this.foundation?.deactivate();
  }

  /**
   * Returns the indicator's client rect
   */
  computeIndicatorClientRect(): ClientRect {
    return this.tabIndicator_.computeContentClientRect();
  }

  computeDimensions(): MDCTabDimensions {
    return this.foundation!.computeDimensions();
  }

  /**
   * Focuses the tab
   */
  focus() {
    this.root.focus();
  }

}

/** @hidden */
export interface IMdcTabElement extends HTMLElement {
  au: {
    controller: {
      viewModel: MdcTab;
    };
  };
}
