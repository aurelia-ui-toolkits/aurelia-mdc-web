import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTabBarFoundation, MDCTabBarAdapter, MDCTabBarActivatedEventDetail, strings } from '@material/tab-bar';
import { IMdcTabElement } from './tab/mdc-tab';
import { MdcTabScroller } from './scroller/mdc-tab-scroller';
import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MDCTabInteractionEvent, MDCTabFoundation } from '@material/tab';

// aurelia is case insensitive
MDCTabFoundation.strings.INTERACTED_EVENT = MDCTabFoundation.strings.INTERACTED_EVENT.toLowerCase();
strings.TAB_ACTIVATED_EVENT = strings.TAB_ACTIVATED_EVENT.toLowerCase();

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-tab-bar.html'))
@customElement('mdc-tab-bar')
export class MdcTabBar extends MdcComponent<MDCTabBarFoundation> {
  private tabScroller_?: MdcTabScroller; // assigned in html

  @bindable.booleanAttr
  focusOnActivate: boolean;
  async focusOnActivateChanged() {
    await this.initialised;
    this.tabScroller_?.tabs.forEach((tab) => tab.focusOnActivate = this.focusOnActivate);
  }

  @bindable.booleanAttr
  useAutomaticActivation: boolean;
  async useAutomaticActivationChanged() {
    await this.initialised;
    this.foundation?.setUseAutomaticActivation(this.useAutomaticActivation);
  }

  @bindable
  align: MdcTabScroller['align'];

  async initialise() {
    await this.tabScroller_!.initialised;
    await Promise.all(this.tabScroller_!.tabs.map(async x => x.initialised));
  }

  initialSyncWithDOM() {
    for (let i = 0; i < this.tabScroller_!.tabs.length; i++) {
      if (this.tabScroller_!.tabs[i].active) {
        this.scrollIntoView(i);
        break;
      }
    }
  }

  handleKeyDown_(evt: KeyboardEvent) {
    this.foundation?.handleKeyDown(evt);
    return true;
  }

  handleTabInteraction_(evt: MDCTabInteractionEvent) {
    this.foundation?.handleTabInteraction(evt);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTabBarAdapter = {
      scrollTo: (scrollX) => this.tabScroller_!.scrollTo(scrollX),
      incrementScroll: (scrollXIncrement) => this.tabScroller_!.incrementScroll(scrollXIncrement),
      getScrollPosition: () => this.tabScroller_!.getScrollPosition(),
      getScrollContentWidth: () => this.tabScroller_!.getScrollContentWidth(),
      getOffsetWidth: () => this.root.offsetWidth,
      isRTL: () => window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
      setActiveTab: (index) => this.foundation?.activateTab(index),
      activateTabAtIndex: (index, clientRect) => this.tabScroller_!.tabs[index].activate(clientRect),
      deactivateTabAtIndex: (index) => this.tabScroller_!.tabs[index].deactivate(),
      focusTabAtIndex: (index) => this.tabScroller_!.tabs[index].focus(),
      getTabIndicatorClientRectAtIndex: (index) => this.tabScroller_!.tabs[index].computeIndicatorClientRect(),
      getTabDimensionsAtIndex: (index) => this.tabScroller_!.tabs[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < this.tabScroller_!.tabs.length; i++) {
          if (this.tabScroller_!.tabs[i].isActive()) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = this.getTabElements_();
        const activeElement = document.activeElement! as IMdcTabElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: (id) => {
        for (let i = 0; i < this.tabScroller_!.tabs.length; i++) {
          if (this.tabScroller_!.tabs[i].id === id) {
            return i;
          }
        }
        return -1;
      },
      getTabListLength: () => this.tabScroller_!.tabs.length,
      notifyTabActivated: (index) => this.emit<MDCTabBarActivatedEventDetail>(strings.TAB_ACTIVATED_EVENT, { index }, true),
    };
    return new MDCTabBarFoundation(adapter);
  }

  /**
   * Activates the tab at the given index
   * @param index The index of the tab
   */
  activateTab(index: number) {
    this.foundation?.activateTab(index);
  }

  /**
   * Scrolls the tab at the given index into view
   * @param index THe index of the tab
   */
  scrollIntoView(index: number) {
    this.foundation?.scrollIntoView(index);
  }

  /**
   * Returns all the tab elements in a nice clean array
   */
  private getTabElements_(): IMdcTabElement[] {
    return [].slice.call(this.root.querySelectorAll(strings.TAB_SELECTOR)) as IMdcTabElement[];
  }

}
