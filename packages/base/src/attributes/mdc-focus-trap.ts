import { inject } from 'aurelia-dependency-injection';
import { customAttribute } from 'aurelia-templating';
import { bindable } from 'aurelia-typed-observable-plugin';
import { FocusTrap } from '@material/dom/focus-trap';

@customAttribute('mdc-focus-trap')
@inject(Element)
export class MdcFocusTrap {
  constructor(private root: HTMLElement) { }

  focusTrap: FocusTrap;

  @bindable
  initialFocusEl?: HTMLElement;

  @bindable.booleanAttr
  skipInitialFocus: boolean;

  @bindable.booleanAttr
  skipRestoreFocus: boolean;

  attached() {
    this.focusTrap = new FocusTrap(this.root, { initialFocusEl: this.initialFocusEl, skipInitialFocus: this.skipInitialFocus, skipRestoreFocus: this.skipRestoreFocus });
  }

  trapFocus() {
    this.focusTrap.trapFocus();
  }

  releaseFocus() {
    this.focusTrap.releaseFocus();
  }
}
