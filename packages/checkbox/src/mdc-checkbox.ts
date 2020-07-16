import { MdcComponent } from "@aurelia-mdc-web/base";
import { MDCCheckboxFoundation, MDCCheckboxAdapter } from "@material/checkbox";
import { bindable } from 'aurelia-typed-observable-plugin';
import { getCorrectEventName } from '@material/animation/util';
import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';

let checkboxId = 0;

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-checkbox.html'))
@customElement('mdc-checkbox')
export class MdcCheckbox extends MdcComponent<MDCCheckboxFoundation> {
  constructor(root: IMdcCheckboxElement) {
    super(root);
    defineMdcCheckboxElementApis(this.root);
  }

  nativeControl_: HTMLInputElement;

  id = `mdc-checkbox-${++checkboxId}-input`;

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
    if (this.nativeControl_) {
      this.nativeControl_.checked = checked;
    } else {
      this.initialChecked = checked;
    }
  }

  get indeterminate(): boolean {
    return this.nativeControl_.indeterminate;
  }

  set indeterminate(indeterminate: boolean) {
    this.nativeControl_.indeterminate = indeterminate;
  }

  get value(): string {
    return this.nativeControl_.value;
  }

  set value(value: string) {
    this.nativeControl_.value = value;
  }

  async initialise() {
    this.nativeControl_.indeterminate = this.indeterminate;
    this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);

    if (this.root.hasAttribute('checked')) {
      const attributeValue = this.root.getAttribute('checked');

      if (attributeValue || attributeValue === '') {
        (this.root as IMdcCheckboxElement).checked = true;
      }
    }

    if (this.root.hasAttribute('indeterminate')) {
      const attributeValue = this.root.getAttribute('indeterminate');

      if (attributeValue || attributeValue === '') {
        (this.root as IMdcCheckboxElement).indeterminate = true;
      }
    }
  }

  initialSyncWithDOM() {
    if (this.initialChecked !== undefined) {
      this.checked = this.initialChecked;
    }
  }

  destroy() {
    this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
  }

  handleChange_() {
    this.foundation?.handleChange();
    this.emit('change', { checked: this.checked });
  }

  handleAnimationEnd_() {
    this.foundation?.handleAnimationEnd();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCCheckboxAdapter = {
      addClass: (className) => this.root.classList.add(className),
      forceLayout: () => (this.root as HTMLElement).offsetWidth,
      hasNativeControl: () => !!this.nativeControl_,
      isAttachedToDOM: () => Boolean(this.root.parentNode),
      isChecked: () => this.checked,
      isIndeterminate: () => this.indeterminate,
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      removeNativeControlAttr: (attr) => {
        this.nativeControl_.removeAttribute(attr);
      },
      setNativeControlAttr: (attr, value) => {
        this.nativeControl_.setAttribute(attr, value);
      },
      setNativeControlDisabled: (disabled) => {
        this.nativeControl_.disabled = disabled;
      },
    };
    return new MDCCheckboxFoundation(adapter);
  }

  focus() {
    this.nativeControl_.focus();
  }

  blur() {
    this.nativeControl_.blur();
  }
}

export interface IMdcCheckboxElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  au: {
    controller: {
      viewModel: MdcCheckbox;
    }
  }
}

function defineMdcCheckboxElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    type: {
      value: 'checkbox',
    },
    checked: {
      get(this: IMdcCheckboxElement) {
        return this.au.controller.viewModel.checked;
      },
      set(this: IMdcCheckboxElement, value: any) {
        this.au.controller.viewModel.checked = value;
      },
      configurable: true
    },
    indeterminate: {
      get(this: IMdcCheckboxElement) {
        return this.au.controller.viewModel.indeterminate;
      },
      set(this: IMdcCheckboxElement, value: boolean) {
        this.au.controller.viewModel.indeterminate = value;
      }
    },
    focus: {
      value(this: IMdcCheckboxElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcCheckboxElement) {
        this.au.controller.viewModel.blur();
      },
      configurable: true
    }
  });
};
