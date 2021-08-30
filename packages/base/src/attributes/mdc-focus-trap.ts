import { inject } from 'aurelia-dependency-injection';
import { customAttribute } from 'aurelia-templating';
import { bindable } from 'aurelia-typed-observable-plugin';
import { FocusTrap } from '@material/dom/focus-trap';

@customAttribute('mdc-focus-trap')
@inject(Element)
export class MdcFocusTrap {
  constructor(private root: HTMLElement) { }

  focusTrap?: FocusTrap;

  @bindable.booleanAttr
  delay: boolean;

  @bindable
  initialFocusEl?: HTMLElement | (() => HTMLElement);

  @bindable.booleanAttr
  skipInitialFocus: boolean;

  @bindable.booleanAttr
  skipRestoreFocus: boolean;

  attached() {
    if (!this.delay) {
      this.create();
    }
  }

  create() {
    const el = this.initialFocusEl instanceof HTMLElement || this.initialFocusEl === undefined ? this.initialFocusEl : this.initialFocusEl();
    this.focusTrap = new FocusTrap(this.root, { initialFocusEl: el, skipInitialFocus: this.skipInitialFocus, skipRestoreFocus: this.skipRestoreFocus });
  }

  trapFocus() {
    this.focusTrap?.trapFocus();
  }

  releaseFocus() {
    this.focusTrap?.releaseFocus();
  }
}
