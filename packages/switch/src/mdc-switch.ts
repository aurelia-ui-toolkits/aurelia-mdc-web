import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCSwitchFoundation, MDCSwitchAdapter } from '@material/switch';
import { inject, customElement, bindable, CustomElement } from 'aurelia';

let switchId = 0;

@inject(Element)
@customElement('mdc-switch')
export class MdcSwitch extends MdcComponent<MDCSwitchFoundation> {
  constructor(root: IMdcSwitchElement) {
    super(root);
    defineMdcSwitchElementApis(this.root);
  }

  nativeControl_: HTMLInputElement;

  id = `mdc-switch-${++switchId}-input`;

  @bindable({ set: booleanAttr })
  disabled: boolean;
  disabledChanged() {
    this.nativeControl_.disabled = this.disabled;
  }

  @bindable({ set: booleanAttr })
  touch: boolean;

  _checked?: boolean;
  get checked(): boolean {
    if (this.nativeControl_) {
      return this.nativeControl_.checked;
    } else {
      return this._checked ?? false;
    }
  }

  set checked(checked: boolean) {
    this._checked = checked;
    if (this.foundation) {
      this.foundation?.setChecked(checked);
    }
  }

  beforeFoundationCreated() {
    if (this.root.hasAttribute('checked')) {
      const attributeValue = this.root.getAttribute('checked');

      if (attributeValue || attributeValue === '') {
        (this.root as IMdcSwitchElement).checked = true;
      }
    }
  }

  initialSyncWithDOM() {
    this.disabledChanged();
    if (this._checked !== undefined) {
      this.checked = this._checked;
    }
  }

  destroy() {
    this._checked = undefined;
  }

  handleChange_(evt: Event) {
    this.foundation?.handleChange(evt);
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSwitchAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      setNativeControlChecked: (checked) => this.nativeControl_.checked = checked,
      setNativeControlDisabled: (disabled) => this.nativeControl_.disabled = disabled,
      setNativeControlAttr: (attr, value) => this.nativeControl_.setAttribute(attr, value),
    };
    return new MDCSwitchFoundation(adapter);
  }

  focus() {
    this.nativeControl_.focus();
  }

  blur() {
    this.nativeControl_.blur();
  }
}

/** @hidden */
export interface IMdcSwitchElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  $au: {
    'au:resource:custom-element': {
      viewModel: MdcSwitch;
    };
  };
}

function defineMdcSwitchElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    type: {
      value: 'checkbox',
    },
    checked: {
      get(this: IMdcSwitchElement) {
        return CustomElement.for<MdcSwitch>(this).viewModel.checked;
      },
      set(this: IMdcSwitchElement, value: boolean) {
        CustomElement.for<MdcSwitch>(this).viewModel.checked = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcSwitchElement) {
        CustomElement.for<MdcSwitch>(this).viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcSwitchElement) {
        CustomElement.for<MdcSwitch>(this).viewModel.blur();
      },
      configurable: true
    }
  });
}
