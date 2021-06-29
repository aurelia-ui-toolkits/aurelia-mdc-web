import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCRadioFoundation, MDCRadioAdapter } from '@material/radio';
import { inject, customElement, CustomElement, bindable } from 'aurelia';

let radioId = 0;

/**
 * @selector mdc-radio
 */
@inject(Element)
@customElement('mdc-radio')
export class MdcRadio extends MdcComponent<MDCRadioFoundation> {
  constructor(root: IMdcRadioElement) {
    super(root);
    defineMdcRadioElementApis(this.root);
  }

  nativeControl_: HTMLInputElement;

  id = `mdc-radio-${++radioId}-input`;

  /** Disables the component */
  @bindable({ set: booleanAttr })
  disabled: boolean;
  disabledChanged() {
    this.nativeControl_.disabled = this.disabled;
  }

  /** Set the component touch target to 48 x 48 px */
  @bindable({ set: booleanAttr })
  touch: boolean;

  _checked?: boolean;
  /** Use to verify the checked value */
  get checked(): boolean {
    if (this.nativeControl_) {
      return this.nativeControl_.checked;
    } else {
      return this._checked ?? false;
    }
  }

  set checked(checked: boolean) {
    this._checked = checked;
    if (this.nativeControl_) {
      this.nativeControl_.checked = checked;
    }
  }

  _value?: string;
  /** Value of the radio button */
  get value(): string {
    if (this.nativeControl_) {
      return this.nativeControl_.value;
    } else {
      return this._value ?? '';
    }
  }

  set value(value: string) {
    this._value = value;
    if (this.nativeControl_) {
      this.nativeControl_.value = value;
    }
  }

  attaching() {
    if (this.root.hasAttribute('checked')) {
      const attributeValue = this.root.getAttribute('checked');

      if (attributeValue || attributeValue === '') {
        (this.root as IMdcRadioElement).checked = true;
      }
    }
  }

  initialSyncWithDOM() {
    this.disabledChanged();
    if (this._checked !== undefined) {
      this.checked = this._checked;
    }
    if (this._value !== undefined) {
      this.value = this._value;
    }
  }

  destroy() {
    this._checked = undefined;
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCRadioAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      setNativeControlDisabled: (disabled) => this.nativeControl_.disabled =
        disabled,
    };
    return new MDCRadioFoundation(adapter);
  }

  /** Set focus to the radio button */
  focus() {
    this.nativeControl_.focus();
  }

  /** Set focus away from the radio button */
  blur() {
    this.nativeControl_.blur();
  }
}

/** @hidden */
export interface IMdcRadioElement extends HTMLElement {
  checked: boolean;
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcRadio;
    };
  };
}

function defineMdcRadioElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    type: {
      value: 'radio',
    },
    checked: {
      get(this: IMdcRadioElement) {
        return CustomElement.for<MdcRadio>(this).viewModel.checked;
      },
      set(this: IMdcRadioElement, value: boolean) {
        CustomElement.for<MdcRadio>(this).viewModel.checked = value;
      },
      configurable: true
    },
    value: {
      get(this: IMdcRadioElement) {
        return CustomElement.for<MdcRadio>(this).viewModel.value;
      },
      set(this: IMdcRadioElement, value: string) {
        CustomElement.for<MdcRadio>(this).viewModel.value = value;
      }
    },
    focus: {
      value(this: IMdcRadioElement) {
        CustomElement.for<MdcRadio>(this).viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcRadioElement) {
        CustomElement.for<MdcRadio>(this).viewModel.blur();
      },
      configurable: true
    }
  });
}
