import { cssClasses, MDCFormFieldFoundation, MDCFormFieldAdapter } from '@material/form-field';
import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MdcRipple, IMdcRippleElement } from '@aurelia-mdc-web/ripple';
import { customElement, inject, bindable } from 'aurelia';
import { CustomAttribute } from '@aurelia/runtime-html';
import template from './mdc-form-field.html?raw';

/**
 * @selector mdc-form-field
 */
@inject(Element)
@customElement({ name: 'mdc-form-field', template })
export class MdcFormField extends MdcComponent<MDCFormFieldFoundation> {
  cssClasses = cssClasses;

  ripple?: MdcRipple;

  label?: HTMLLabelElement | null;

  /** Force label text to stay on a single line and ellipse the overflow text */
  @bindable({ set: booleanAttr })
  nowrap: boolean;

  /** Position the input after the label */
  @bindable({ set: booleanAttr })
  alignEnd: boolean;

  /** Distributes space between label text and control */
  @bindable({ set: booleanAttr })
  spaceBetween: boolean;

  initialSyncWithDOM() {
    let rippleUpgraded = this.root.querySelector<IMdcRippleElement>('mdc-checkbox');
    if (!rippleUpgraded) {
      rippleUpgraded = this.root.querySelector<IMdcRippleElement>('mdc-radio');
    }
    this.ripple = rippleUpgraded ? CustomAttribute.for<MdcRipple>(rippleUpgraded, 'mdc-ripple')?.viewModel : undefined;

    const input = this.root.querySelector('input, button');
    if (input?.hasAttribute('id')) {
      this.label = this.root.querySelector('label');
      if (this.label) {
        this.label.setAttribute('for', input.getAttribute('id')!);
      }
    }
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCFormFieldAdapter = {
      activateInputRipple: () => this.ripple?.activate(),
      deactivateInputRipple: () => this.ripple?.deactivate(),
      deregisterInteractionHandler: (evtType, handler) => this.label?.removeEventListener(evtType, handler),
      registerInteractionHandler: (evtType, handler) => this.label?.addEventListener(evtType, handler),
    };
    return new MDCFormFieldFoundation(adapter);
  }

}
