import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTabScrollerFoundation, MDCTabScrollerAdapter, util } from '@material/tab-scroller';
import { matches } from '@material/dom/ponyfill';
import { children, useView, PLATFORM, customElement, inject } from 'aurelia-framework';
import { MdcTab } from '../tab/mdc-tab';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-tab-scroller.html'))
@customElement('mdc-tab-scroller')
export class MdcTabScroller extends MdcComponent<MDCTabScrollerFoundation> {
  private content_: HTMLElement; // assigned in html
  private area_: HTMLElement; // assigned in html

  @bindable
  align: 'start' | 'end' | 'center';

  @children('mdc-tab')
  tabs: MdcTab[];

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTabScrollerAdapter = {
      eventTargetMatchesSelector: (evtTarget, selector) => matches(evtTarget as Element, selector),
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      addScrollAreaClass: (className) => this.area_.classList.add(className),
      setScrollAreaStyleProperty: (prop, value) => this.area_.style.setProperty(prop, value),
      setScrollContentStyleProperty: (prop, value) => this.content_.style.setProperty(prop, value),
      getScrollContentStyleValue: (propName) => window.getComputedStyle(this.content_).getPropertyValue(propName),
      setScrollAreaScrollLeft: (scrollX) => this.area_.scrollLeft = scrollX,
      getScrollAreaScrollLeft: () => this.area_.scrollLeft,
      getScrollContentOffsetWidth: () => this.content_.offsetWidth,
      getScrollAreaOffsetWidth: () => this.area_.offsetWidth,
      computeScrollAreaClientRect: () => this.area_.getBoundingClientRect(),
      computeScrollContentClientRect: () => this.content_.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => util.computeHorizontalScrollbarHeight(document),
    };
    return new MDCTabScrollerFoundation(adapter);
  }

  handleInteraction_() {
    this.foundation?.handleInteraction();
    return true;
  }

  handleTransitionEnd_(evt: Event) {
    this.foundation?.handleTransitionEnd(evt);
    return true;
  }

  /**
   * Returns the current visual scroll position
   */
  getScrollPosition(): number {
    return this.foundation!.getScrollPosition();
  }

  /**
   * Returns the width of the scroll content
   */
  getScrollContentWidth(): number {
    return this.content_.offsetWidth;
  }

  /**
   * Increments the scroll value by the given amount
   * @param scrollXIncrement The pixel value by which to increment the scroll value
   */
  incrementScroll(scrollXIncrement: number) {
    this.foundation?.incrementScroll(scrollXIncrement);
  }

  /**
   * Scrolls to the given pixel position
   * @param scrollX The pixel value to scroll to
   */
  scrollTo(scrollX: number) {
    this.foundation?.scrollTo(scrollX);
  }
}
