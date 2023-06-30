import { customElement, bindable, inject } from 'aurelia';
import { booleanAttr } from '@aurelia-mdc-web/base';

/**
 * @selector button[mdc-button]
 * @selector a[mdc-button]
 * @selector mdc-button
 */
@inject(Element)
@customElement('mdc-button')
export class MdcButton {
  constructor(public root: HTMLElement) { }

  /**
   * Set the component label
   */
  @bindable
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

  // this is necessary for the route-href to work
  @bindable
  href: string;
  hrefChanged() {
    if (this.href) {
      this.root.setAttribute('href', this.href);
    } else {
      this.root.removeAttribute('href');
    }
  }

  // beforeCompile(controller: Controller) {
  //   const t = document.createElement('template');
  //   t.setAttribute('au-slot', '');
  //   const host = (controller.host as HTMLElement);
  //   const nodes = Array.from(host.childNodes);
  //   nodes.forEach(x => t.appendChild(x));
  //   host.innerHTML = '';
  //   host.appendChild(t);
  // }

  attached() {
    this.hrefChanged();
    const icons = this.root.querySelectorAll('mdc-icon');
    Array.from(icons).forEach(x => x.classList.add('mdc-button__icon'));
  }
}
