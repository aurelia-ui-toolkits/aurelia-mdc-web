import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSwitchFoundation, MDCSwitchAdapter } from '@material/switch';
import { bindable } from 'aurelia-typed-observable-plugin';
import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';

let switchId = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-switch.html'))
@customElement('mdc-switch')
export class MdcSwitch extends MdcComponent<MDCSwitchFoundation> {
  constructor(root: IMdcSwitchElement) {
    super(root);
    defineMdcSwitchElementApis(this.root);
  }

  nativeControl_: HTMLInputElement;

  id = `mdc-switch-${++switchId}-input`;

  @bindable.booleanAttr
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    this.nativeControl_.disabled = this.disabled;
  }

  @bindable.booleanAttr
  touch: boolean;

  initialChecked?: boolean;
  get checked(): boolean {
    if (this.nativeControl_) {
      return this.nativeControl_.checked;
    } else {
      return this.initialChecked ?? false;
    }
  }

  set checked(checked: boolean) {
    if (this.foundation) {
      this.foundation?.setChecked(checked);
    } else {
      this.initialChecked = checked;
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    if (this.root.hasAttribute('checked')) {
      const attributeValue = this.root.getAttribute('checked');

      if (attributeValue || attributeValue === '') {
        (this.root as IMdcSwitchElement).checked = true;
      }
    }
  }

  initialSyncWithDOM() {
    if (this.initialChecked !== undefined) {
      this.checked = this.initialChecked;
    }
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
  au: {
    controller: {
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
        return this.au.controller.viewModel.checked;
      },
      set(this: IMdcSwitchElement, value: boolean) {
        this.au.controller.viewModel.checked = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcSwitchElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcSwitchElement) {
        this.au.controller.viewModel.blur();
      },
      configurable: true
    }
  });
}
