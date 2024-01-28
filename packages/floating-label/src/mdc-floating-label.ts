import { inject, customElement } from 'aurelia';
import { MDCFloatingLabelFoundation, MDCFloatingLabelAdapter } from '@material/floating-label';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { estimateScrollWidth } from '@material/dom/ponyfill';
import template from './mdc-floating-label.html';

@inject(Element)
@customElement({ name: 'mdc-floating-label', template })
export class MdcFloatingLabel extends MdcComponent<MDCFloatingLabelFoundation> {
  shake(shouldShake: boolean) {
    this.foundation?.shake(shouldShake);
  }

  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */
  float(shouldFloat: boolean) {
    this.foundation?.float(shouldFloat);
  }

  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
   */
  setRequired(isRequired: boolean) {
    this.foundation?.setRequired(isRequired);
  }

  getWidth(): number {
    return this.foundation!.getWidth();
  }

  getDefaultFoundation() {
    const adapter: MDCFloatingLabelAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      getWidth: () => estimateScrollWidth(this.root),
      registerInteractionHandler: (evtType, handler) => this.listen(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.unlisten(evtType, handler),
    };
    return new MDCFloatingLabelFoundation(adapter);
  }
}
