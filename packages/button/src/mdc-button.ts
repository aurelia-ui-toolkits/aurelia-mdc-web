import { customElement, bindable, inject } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';
import template from './mdc-button.html'

/**
 * @selector button[mdc-button]
 * @selector a[mdc-button]
 * @selector mdc-button
 */
@inject(Element)
@customElement({ name: 'mdc-button', template })
export class MdcButton {
  constructor(public root: HTMLElement) { }

  /**
   * Set the component label
   */
  @bindable()
  label: string;

  /**
   * Set the component touch target to 48 x 48 px
   */
  @bindable({ set: booleanAttr })
  touch: boolean;

  /**
   * A contained button that is elevated upon the surface
   */
  @bindable({ set: booleanAttr })
  raised: boolean;

  /**
   * A contained button that is flush with the surface
   */
  @bindable({ set: booleanAttr })
  unelevated: boolean;

  /**
   * A contained button that is flush with the surface and has a visible border
   */
  @bindable({ set: booleanAttr })
  outlined: boolean;

  /**
   * Set the button disabled
   */
  @bindable({ set: booleanAttr })
  disabled: boolean;
  disabledChanged() {
    if (this.disabled) {
      this.root.setAttribute('disabled', '');
    } else {
      this.root.removeAttribute('disabled');
    }
  }

  attached() {
    const icons = this.root.querySelectorAll('mdc-icon');
    Array.from(icons).forEach(x => x.classList.add('mdc-button__icon'));
  }
}
