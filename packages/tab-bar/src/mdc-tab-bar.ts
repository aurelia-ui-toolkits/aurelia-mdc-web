import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTabBarFoundation, MDCTabBarAdapter, MDCTabBarActivatedEventDetail, strings } from '@material/tab-bar';
import { MdcTab, IMdcTabElement } from './tab/mdc-tab';
import { MdcTabScroller } from './scroller/mdc-tab-scroller';
import { inject, useView, PLATFORM, customElement, children } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';
import { MDCTabInteractionEvent, MDCTabFoundation } from '@material/tab';
import { CustomEventListener } from '@material/base/types';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-tab-bar.html'))
@customElement('mdc-tab-bar')
export class MdcTabBar extends MdcComponent<MDCTabBarFoundation> {
  private tabList_: MdcTab[];
  private tabScroller_?: MdcTabScroller; // assigned in html

  @bindable.booleanAttr
  focusOnActivate: boolean;
  focusOnActivateChanged() {
    this.tabList_.forEach((tab) => tab.focusOnActivate = this.focusOnActivate);
  }

  @bindable.booleanAttr
  useAutomaticActivation: boolean;
  async useAutomaticActivationChanged() {
    await this.initialised;
    this.foundation?.setUseAutomaticActivation(this.useAutomaticActivation);
  }

  async initialise() {
    this.tabList_ = this.getTabElements_().map(x => x.au.controller.viewModel);
    await Promise.all(this.tabList_.map(x => x.initialised));
  }

  private handleTabInteraction_!: CustomEventListener<MDCTabInteractionEvent>; // assigned in initialSyncWithDOM()

  initialSyncWithDOM() {
    this.handleTabInteraction_ = (evt) => this.foundation?.handleTabInteraction(evt);
    this.listen(MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    for (let i = 0; i < this.tabList_.length; i++) {
      if (this.tabList_[i].active) {
        this.scrollIntoView(i);
        break;
      }
    }

  }

  destroy() {
    this.unlisten(MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
  }

  handleKeyDown_(evt: KeyboardEvent) {
    this.foundation?.handleKeyDown(evt);
    return true;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTabBarAdapter = {
      scrollTo: (scrollX) => this.tabScroller_!.scrollTo(scrollX),
      incrementScroll: (scrollXIncrement) => this.tabScroller_!.incrementScroll(scrollXIncrement),
      getScrollPosition: () => this.tabScroller_!.getScrollPosition(),
      getScrollContentWidth: () => this.tabScroller_!.getScrollContentWidth(),
      getOffsetWidth: () => (this.root as HTMLElement).offsetWidth,
      isRTL: () => window.getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
      setActiveTab: (index) => this.foundation?.activateTab(index),
      activateTabAtIndex: (index, clientRect) => this.tabList_[index].activate(clientRect),
      deactivateTabAtIndex: (index) => this.tabList_[index].deactivate(),
      focusTabAtIndex: (index) => this.tabList_[index].focus(),
      getTabIndicatorClientRectAtIndex: (index) => this.tabList_[index].computeIndicatorClientRect(),
      getTabDimensionsAtIndex: (index) => this.tabList_[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < this.tabList_.length; i++) {
          if (this.tabList_[i].active) {
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
        for (let i = 0; i < this.tabList_.length; i++) {
          if (this.tabList_[i].id === id) {
            return i;
          }
        }
        return -1;
      },
      getTabListLength: () => this.tabList_.length,
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
    return [].slice.call(this.root.querySelectorAll(strings.TAB_SELECTOR));
  }

}
