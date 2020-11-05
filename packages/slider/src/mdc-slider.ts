import { MdcComponent, Size } from '@aurelia-mdc-web/base';
import { MDCSliderAdapter, Thumb, cssClasses, TickMark, MDCSliderChangeEventDetail, events, attributes } from '@material/slider';
import { bindable } from 'aurelia-typed-observable-plugin';
import { inject, useView, PLATFORM, customElement, observable } from 'aurelia-framework';
import { MdcSliderFoundationAurelia } from './mdc-slider-foundation-aurelia';

events.INPUT = events.INPUT.toLowerCase();
events.CHANGE = events.CHANGE.toLowerCase();

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-slider.html'))
@customElement('mdc-slider')
export class MdcSlider extends MdcComponent<MdcSliderFoundationAurelia> {
  constructor(root: HTMLElement) {
    super(root);
    defineMdcSliderElementApis(this.root);
  }

  private startThumb?: HTMLElement;
  private endThumb: HTMLElement;
  private trackActive: HTMLElement;
  tickMarkStatuses: TickMark[];
  TickMark = TickMark;

  @observable
  size: Size;
  async sizeChanged() {
    await this.initialised;
    this.foundation?.layout();
  }

  @bindable.booleanAttr
  discrete: boolean;

  @bindable.booleanAttr
  tickMarks: boolean;

  @bindable.booleanAttr
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    this.foundation?.setDisabled(this.disabled);
  }

  @bindable
  min: string;
  minChanged() {
    this.endThumb.setAttribute(attributes.ARIA_VALUEMIN, this.min);
  }

  @bindable
  max: string;
  maxChanged() {
    this.endThumb.setAttribute(attributes.ARIA_VALUEMAX, this.min);
  }

  @bindable
  step: string;
  stepChanged() {
    this.root.setAttribute(attributes.DATA_ATTR_STEP, this.step);
  }

  @bindable
  valueToAriaValueTextFn: ((value: number) => string)|null = null;

  initialValue: number;
  get value(): number {
    if (this.foundation) {
      return this.foundation.getValue();
    } else {
      return this.initialValue;
    }
  }

  set value(value: number) {
    if (this.foundation) {
      this.foundation.setValue(value);
    } else {
      this.initialValue = value;
    }
  }

  initialValueStart: number;
  get valueStart(): number {
    if (this.foundation) {
      return this.foundation.getValueStart();
    } else {
      return this.initialValueStart;
    }
  }

  set valueStart(value: number) {
    if (this.foundation) {
      this.foundation.setValueStart(value);
    } else {
      this.initialValueStart = value;
    }
  }

  initialSyncWithDOM() {
    this.value = this.initialValue;
    this.valueStart = this.initialValueStart;
    this.foundation?.layout();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSliderAdapter = {
      hasClass: (className) => this.root.classList.contains(className),
      addClass: (className) => {
        this.root.classList.add(className);
      },
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      addThumbClass: (className, thumb: Thumb) => {
        this.getThumbEl(thumb)?.classList.add(className);
      },
      removeThumbClass: (className, thumb: Thumb) => {
        this.getThumbEl(thumb)?.classList.remove(className);
      },
      getAttribute: (attribute) => this.root.getAttribute(attribute),
      getThumbAttribute: (attribute, thumb: Thumb) => this.getThumbEl(thumb)?.getAttribute(attribute) ?? null,
      setThumbAttribute: (attribute, value, thumb: Thumb) => {
        this.getThumbEl(thumb)?.setAttribute(attribute, value);
      },
      isThumbFocused: (thumb: Thumb) =>
        this.getThumbEl(thumb) === document.activeElement,
      focusThumb: (thumb: Thumb) => {
        this.getThumbEl(thumb)?.focus();
      },
      getThumbKnobWidth: (thumb: Thumb) => {
        return this.getThumbEl(thumb)?.querySelector<HTMLElement>(`.${cssClasses.THUMB_KNOB}`)!
          .getBoundingClientRect()
          .width ?? 0;
      },
      getThumbBoundingClientRect: (thumb: Thumb) => this.getThumbEl(thumb)!.getBoundingClientRect(),
      getBoundingClientRect: () => this.root.getBoundingClientRect(),
      isRTL: () => getComputedStyle(this.root).direction === 'rtl',
      setThumbStyleProperty: (propertyName, value, thumb: Thumb) => {
        this.getThumbEl(thumb)?.style.setProperty(propertyName, value);
      },
      removeThumbStyleProperty: (propertyName, thumb: Thumb) => {
        this.getThumbEl(thumb)?.style.removeProperty(propertyName);
      },
      setTrackActiveStyleProperty: (propertyName, value) => {
        this.trackActive.style.setProperty(propertyName, value);
      },
      removeTrackActiveStyleProperty: (propertyName) => {
        this.trackActive.style.removeProperty(propertyName);
      },
      setValueIndicatorText: (value: number, thumb: Thumb) => {
        const valueIndicatorEl =
          this.getThumbEl(thumb)?.querySelector<HTMLElement>(
            `.${cssClasses.VALUE_INDICATOR_TEXT}`);
        valueIndicatorEl!.textContent = String(value);
      },
      getValueToAriaValueTextFn: () => this.valueToAriaValueTextFn,
      updateTickMarks: (tickMarks: TickMark[]) => {
        this.tickMarkStatuses = tickMarks;
      },
      setPointerCapture: (pointerId) => {
        this.root.setPointerCapture(pointerId);
      },
      emitChangeEvent: (value, thumb: Thumb) => {
        this.emit<MDCSliderChangeEventDetail>(events.CHANGE, { value, thumb });
      },
      emitInputEvent: (value, thumb: Thumb) => {
        this.emit<MDCSliderChangeEventDetail>(events.INPUT, { value, thumb });
      },
      emitDragStartEvent: () => {
        // Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },
      emitDragEndEvent: () => {
        // Not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448
      },
      registerEventHandler: (evtType, handler) => {
        this.listen(evtType, handler);
      },
      deregisterEventHandler: (evtType, handler) => {
        this.unlisten(evtType, handler);
      },
      registerThumbEventHandler: (thumb, evtType, handler) => {
        this.getThumbEl(thumb)?.addEventListener(evtType, handler);
      },
      deregisterThumbEventHandler: (thumb, evtType, handler) => {
        this.getThumbEl(thumb)?.removeEventListener(evtType, handler);
      },
      registerBodyEventHandler: (evtType, handler) => {
        document.body.addEventListener(evtType, handler);
      },
      deregisterBodyEventHandler: (evtType, handler) => {
        document.body.removeEventListener(evtType, handler);
      },
      registerWindowEventHandler: (evtType, handler) => {
        window.addEventListener(evtType, handler);
      },
      deregisterWindowEventHandler: (evtType, handler) => {
        window.removeEventListener(evtType, handler);
      },
      // tslint:enable:object-literal-sort-keys
    };
    return new MdcSliderFoundationAurelia(adapter);
  }

  getThumbEl(thumb: Thumb) {
    return thumb === Thumb.END ? this.endThumb : this.startThumb;
  }

  focus() {
    this.root.focus();
  }

  blur() {
    this.root.blur();
  }

}

/** @hidden */
export interface IMdcSliderElement extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  au: {
    controller: {
      viewModel: MdcSlider;
    };
  };
}

function defineMdcSliderElementApis(element: HTMLElement) {
  Object.defineProperties(element, {
    'value': {
      get(this: IMdcSliderElement) {
        return this.au.controller.viewModel.value;
      },
      set(this: IMdcSliderElement, value: number) {
        this.au.controller.viewModel.value = value;
      },
      configurable: true
    },
    'value-start': {
      get(this: IMdcSliderElement) {
        return this.au.controller.viewModel.valueStart;
      },
      set(this: IMdcSliderElement, value: number) {
        this.au.controller.viewModel.valueStart = value;
      },
      configurable: true
    },
    'focus': {
      value(this: IMdcSliderElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    },
    'blur': {
      value(this: IMdcSliderElement) {
        this.au.controller.viewModel.blur();
      },
      configurable: true
    }
  });
}
