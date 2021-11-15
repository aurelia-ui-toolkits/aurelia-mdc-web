import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSwitchState, MDCSwitchRenderAdapter, MDCSwitchRenderFoundation } from '@material/switch';
import { inject, customElement, CustomElement } from 'aurelia';
import { MDCRippleCapableSurface } from '@material/ripple';

let switchId = 0;

@inject(Element)
@customElement('mdc-switch')
export class MdcSwitch extends MdcComponent<MDCSwitchRenderFoundation> implements MDCSwitchState, MDCRippleCapableSurface {
  constructor(public root: IMdcSwitchElement) {
    super(root);
    defineMdcSwitchElementApis(this.root);
    this.root.id = `mdc-switch-${++switchId}`;
  }

  disabled: boolean;
  selected: boolean;
  processing: boolean;

  initialSyncWithDOM() {
    if (this.selected) {
      this.root.classList.add('mdc-switch--selected');
      this.root.setAttribute('aria-checked', 'true');
    }
    this.foundation?.initFromDOM();
  }

  getDefaultFoundation() {
    return new MDCSwitchRenderFoundation(this.createAdapter());
  }

  protected createAdapter(): MDCSwitchRenderAdapter {
    return {
      addClass: className => {
        this.root.classList.add(className);
      },
      hasClass: className => this.root.classList.contains(className),
      isDisabled: () => this.root.disabled,
      removeClass: className => {
        this.root.classList.remove(className);
      },
      setAriaChecked: ariaChecked =>
        this.root.setAttribute('aria-checked', ariaChecked),
      setDisabled: disabled => {
        this.root.disabled = disabled;
      },
      state: this,
    };
  }

  handleClick() {
    this.foundation?.handleClick();
    this.emit('change', {}, true);
  }
}

/** @hidden */
export interface IMdcSwitchElement extends HTMLButtonElement {
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
    selected: {
      get(this: IMdcSwitchElement) {
        return CustomElement.for<MdcSwitch>(this).viewModel.selected;
      },
      set(this: IMdcSwitchElement, value: boolean) {
        CustomElement.for<MdcSwitch>(this).viewModel.selected = value;
      },
      configurable: true
    }
  });
}
