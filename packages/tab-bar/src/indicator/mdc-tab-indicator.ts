import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCTabIndicatorFoundation, MDCTabIndicatorAdapter, MDCFadingTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator';
import { inject, customElement, bindable } from 'aurelia';
import template from './mdc-tab-indicator.html';

@inject(Element)
@customElement({ name: 'mdc-tab-indicator', template })
export class MdcTabIndicator extends MdcComponent<MDCTabIndicatorFoundation> {
  private content: HTMLElement; // assigned in html

  @bindable({ set: booleanAttr })
  fade: boolean;

  @bindable({ set: booleanAttr })
  active: boolean;

  @bindable
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
      computeContentClientRect: () => this.content.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => this.content.style.setProperty(prop, value),
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
