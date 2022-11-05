import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCTabIndicatorFoundation, MDCTabIndicatorAdapter, MDCFadingTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator';
import { bindable } from 'aurelia-typed-observable-plugin';
import { inject, useView, customElement } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-tab-indicator.html'))
@customElement('mdc-tab-indicator')
export class MdcTabIndicator extends MdcComponent<MDCTabIndicatorFoundation> {
  private content_: HTMLElement; // assigned in html

  @bindable.booleanAttr
  fade: boolean;

  @bindable.booleanAttr
  active: boolean;

  @bindable.none
  icon: string;

  computeContentClientRect(): ClientRect {
    return this.foundation!.computeContentClientRect();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCTabIndicatorAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      computeContentClientRect: () => this.content_.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => this.content_.style.setProperty(prop, value),
    };

    if (this.root.classList.contains(
      MDCTabIndicatorFoundation.cssClasses.FADE)) {
      return new MDCFadingTabIndicatorFoundation(adapter);
    }

    // Default to the sliding indicator
    return new MDCSlidingTabIndicatorFoundation(adapter);
  }

  activate(previousIndicatorClientRect?: ClientRect) {
    this.foundation?.activate(previousIndicatorClientRect);
  }

  deactivate() {
    this.foundation?.deactivate();
  }

}
