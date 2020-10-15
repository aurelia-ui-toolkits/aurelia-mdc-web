import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCCheckboxFoundation, MDCCheckboxAdapter } from '@material/checkbox';
import { bindable } from 'aurelia-typed-observable-plugin';
import { getCorrectEventName } from '@material/animation/util';
import { inject, useView, PLATFORM, customElement, bindingMode } from 'aurelia-framework';

let checkboxId = 0;

/**
 * @selector mdc-checkbox
 * @emits change | Event dispatched on checked change.
 */
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

  /**
   * Disables the component.
   */
  @bindable.booleanAttr
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    // still need to check because a component might already be destroyed
    // by the time the binding is applied
    if (this.nativeControl_) {
      this.nativeControl_.disabled = this.disabled;
    }
  }

  /**
   * Set the component touch target to 48 x 48 px.
   */
  @bindable.booleanAttr
  touch: boolean;

  /**
   * Whether ripple ink is disabled.
   */
  @bindable.booleanAttr
  disableRipple: boolean;

  /**
   * Whether the checkbox should go to checked state or unchecked when toggled from indeterminate state.
   */
  @bindable.booleanAttr
  indeterminateToChecked: boolean = true;

  initialChecked?: boolean;

  get checked(): boolean {
    if (this.nativeControl_) {
      return this.nativeControl_.checked;
    } else {
      return this.initialChecked ?? false;
    }
  }

  /**
   * Whether the checkbox is checked.
   */
  set checked(checked: boolean) {
    if (this.nativeControl_) {
      this.nativeControl_.checked = checked;
    } else {
      this.initialChecked = checked;
    }
  }

  /**
   * Represent a checkbox with three states (e.g. a nested list of checkable items).
   */
  @bindable.booleanAttr({ defaultBindingMode: bindingMode.twoWay })
  indeterminate: boolean;
  async indeterminateChanged() {
    await this.initialised;
    this.nativeControl_.indeterminate = this.indeterminate;
    this.foundation?.handleChange();
  }

  get value(): string {
    return this.nativeControl_.value;
  }

  set value(value: string) {
    this.nativeControl_.value = value;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
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
    if (this.indeterminate) {
      this.indeterminate = false;
      this.checked = this.indeterminateToChecked;
    }
    this.foundation?.handleChange();
  }

  handleAnimationEnd_() {
    this.foundation?.handleAnimationEnd();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCCheckboxAdapter = {
      addClass: (className) => this.root.classList.add(className),
      forceLayout: () => (this.root).offsetWidth,
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

  /**
   * Set focus to the checkbox.
   */
  focus() {
    this.nativeControl_.focus();
  }

  /**
   * Moves focus from the checkbox.
   */
  blur() {
    this.nativeControl_.blur();
  }
}

/** @hidden */
export interface IMdcCheckboxElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  au: {
    controller: {
      viewModel: MdcCheckbox;
    };
  };
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
      set(this: IMdcCheckboxElement, value: boolean) {
        this.au.controller.viewModel.checked = value;
      },
      configurable: true
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
}
