import { FocusTrap } from '@material/dom/focus-trap';
import { customAttribute, inject, bindable } from 'aurelia';
import { booleanAttr } from '..';

@customAttribute('mdc-focus-trap')
@inject(Element)
export class MdcFocusTrap {
  constructor(private root: HTMLElement) { }

  focusTrap: FocusTrap;

  @bindable
  initialFocusEl?: HTMLElement;

  @bindable({set: booleanAttr})
  skipInitialFocus: boolean;

  @bindable({set: booleanAttr})
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
