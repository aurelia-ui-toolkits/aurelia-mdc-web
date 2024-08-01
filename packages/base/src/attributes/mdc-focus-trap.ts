import { FocusTrap } from '@material/dom/focus-trap';
import { customAttribute, inject, bindable } from 'aurelia';
import { booleanAttr } from '../interceptors';

@customAttribute('mdc-focus-trap')
@inject(Element)
export class MdcFocusTrap {
  constructor(private root: HTMLElement) { }

  focusTrap?: FocusTrap;

  @bindable({ set: booleanAttr })
  delay: boolean;

  @bindable()
  initialFocusEl?: HTMLElement | (() => HTMLElement);

  @bindable({ set: booleanAttr })
  skipInitialFocus: boolean;

  @bindable({ set: booleanAttr })
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
