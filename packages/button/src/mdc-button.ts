import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-button.html'))
@customElement('mdc-button')
export class MdcButton {
  constructor(private root: HTMLElement) { }

  @bindable.booleanAttr
  touch: boolean;

  @bindable.booleanAttr
  raised: boolean;

  @bindable.booleanAttr
  unelevated: boolean;

  @bindable.booleanAttr
  outlined: boolean;

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
}
