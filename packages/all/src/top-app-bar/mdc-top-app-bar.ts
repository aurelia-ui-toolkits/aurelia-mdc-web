import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCTopAppBarFoundation, MDCTopAppBarAdapter, MDCTopAppBarBaseFoundation, cssClasses, strings, MDCShortTopAppBarFoundation, MDCFixedTopAppBarFoundation } from '@material/top-app-bar';
import { SpecificEventListener } from '@material/base';
import { inject, customElement, bindable } from 'aurelia';
import template from './mdc-top-app-bar.html?raw';

@inject(Element)
@customElement({ name: 'mdc-top-app-bar', template })
export class MdcTopAppBar extends MdcComponent<MDCTopAppBarBaseFoundation> {

  private handleNavigationClick_!: SpecificEventListener<'click'>; // assigned in initialSyncWithDOM()
  private handleWindowResize_!: SpecificEventListener<'resize'>; // assigned in initialSyncWithDOM()
  private handleTargetScroll_!: SpecificEventListener<'scroll'>; // assigned in initialSyncWithDOM()
  private navIcon_!: Element | null;
  hasActionItems: boolean;

  @bindable({ set: booleanAttr })
  short: boolean;

  @bindable({ set: booleanAttr })
  collapsed: boolean;

  @bindable({ set: booleanAttr })
  fixed: boolean;

  @bindable({ set: booleanAttr })
  prominent: boolean;

  @bindable({ set: booleanAttr })
  dense: boolean;

  @bindable()
  scrollTarget: EventTarget = window;
  scrollTargetChanged(newValue: EventTarget, oldValue: EventTarget) {
    // Remove scroll handler from the previous scroll target
    oldValue?.removeEventListener('scroll', this.handleTargetScroll_ as EventListener);

    // Initialize scroll handler on the new scroll target
    newValue?.addEventListener('scroll', this.handleTargetScroll_ as EventListener);
  }

  initialSyncWithDOM() {
    this.handleNavigationClick_ = this.foundation?.handleNavigationClick.bind(this.foundation);
    this.handleWindowResize_ = this.foundation?.handleWindowResize.bind(this.foundation);
    this.handleTargetScroll_ = this.foundation?.handleTargetScroll.bind(this.foundation);

    this.hasActionItems = !!this.root.querySelector(strings.ACTION_ITEM_SELECTOR);

    this.scrollTargetChanged(this.scrollTarget, window);

    this.navIcon_ = this.root.querySelector(strings.NAVIGATION_ICON_SELECTOR);
    if (this.navIcon_) {
      this.navIcon_.addEventListener('click', this.handleNavigationClick_ as EventListener);
    }

    const isFixed = this.root.classList.contains(cssClasses.FIXED_CLASS);
    const isShort = this.root.classList.contains(cssClasses.SHORT_CLASS);
    if (!isShort && !isFixed) {
      window.addEventListener('resize', this.handleWindowResize_ as EventListener);
    }
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTopAppBarAdapter = {
      hasClass: (className) => this.root.classList.contains(className),
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      setStyle: (property, value) => this.root.style.setProperty(property, value),
      getTopAppBarHeight: () => this.root.clientHeight,
      notifyNavigationIconClicked: () => this.emit(strings.NAVIGATION_EVENT, {}),
      getViewportScrollY: () => {
        const win = this.scrollTarget as Window;
        const el = this.scrollTarget as Element;
        return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
      },
      getTotalActionItems: () => this.root.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length,
    };

    let foundation: MDCTopAppBarBaseFoundation;
    if (this.root.classList.contains(cssClasses.SHORT_CLASS)) {
      foundation = new MDCShortTopAppBarFoundation(adapter);
    } else if (this.root.classList.contains(cssClasses.FIXED_CLASS)) {
      foundation = new MDCFixedTopAppBarFoundation(adapter);
    } else {
      foundation = new MDCTopAppBarFoundation(adapter);
    }

    return foundation;
  }

}
