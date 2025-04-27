import { MdcComponent, booleanAttr } from '../base';
import { MDCCheckboxFoundation, MDCCheckboxAdapter } from '@material/checkbox';
import { getCorrectEventName } from '@material/animation/util';
import { customElement, inject, bindable, BindingMode, CustomElement } from 'aurelia';
import template from './mdc-checkbox.html?raw';

let checkboxId = 0;

/**
 * @selector mdc-checkbox
 * @emits change | Event dispatched on checked change.
 */
@inject(Element)
@customElement({ name: 'mdc-checkbox', template })
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
  @bindable({ set: booleanAttr })
  disabled: boolean;
  disabledChanged() {
    if (this.nativeControl_) {
      this.nativeControl_.disabled = this.disabled;
    }
  }

  /**
   * Set the component touch target to 48 x 48 px.
   */
  @bindable({ set: booleanAttr })
  touch: boolean;

  /**
   * Whether ripple ink is disabled.
   */
  @bindable({ set: booleanAttr })
  disableRipple: boolean;

  /**
   * Whether the checkbox should go to checked state or unchecked when toggled from indeterminate state.
   */
  @bindable({ set: booleanAttr })
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
  @bindable({ set: booleanAttr, mode: BindingMode.twoWay })
  indeterminate: boolean;
  indeterminateChanged() {
    if (this.nativeControl_) {
      this.nativeControl_.indeterminate = this.indeterminate;
    }
    this.foundation?.handleChange();
  }

  get value(): string {
    return this.nativeControl_.value;
  }

  set value(value: string) {
    this.nativeControl_.value = value;
  }

  attaching() {
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
    this.disabledChanged();
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
  $au: {
    'au:resource:custom-element': {
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
        return CustomElement.for<MdcCheckbox>(this).viewModel.checked;
      },
      set(this: IMdcCheckboxElement, value: boolean) {
        CustomElement.for<MdcCheckbox>(this).viewModel.checked = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcCheckboxElement) {
        CustomElement.for<MdcCheckbox>(this).viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcCheckboxElement) {
        CustomElement.for<MdcCheckbox>(this).viewModel.blur();
      },
      configurable: true
    }
  });
}
