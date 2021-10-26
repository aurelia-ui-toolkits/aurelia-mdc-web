import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCSliderAdapter, Thumb, cssClasses, TickMark, MDCSliderChangeEventDetail, events, attributes } from '@material/slider';
import { bindable } from 'aurelia-typed-observable-plugin';
import { inject, useView, PLATFORM, customElement } from 'aurelia-framework';
import { MdcSliderFoundationAurelia } from './mdc-slider-foundation-aurelia';
import { MdcRipple } from '@aurelia-mdc-web/ripple';
import { EventType, SpecificEventListener } from '@material/base';

events.INPUT = events.INPUT.toLowerCase();
events.CHANGE = events.CHANGE.toLowerCase();

interface IEventHandler {
  element: HTMLElement | Window;
  evtType: EventType;
  handler: SpecificEventListener<EventType>;
}

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-slider.html'))
@customElement('mdc-slider')
export class MdcSlider extends MdcComponent<MdcSliderFoundationAurelia> {
  constructor(root: HTMLElement) {
    super(root);
    defineMdcSliderElementApis(this.root);
  }

  private startInput?: HTMLInputElement;
  private endInput: HTMLInputElement;
  private startThumb?: HTMLElement;
  private endThumb: HTMLElement;
  private startRipple?: MdcRipple;
  private endRipple: MdcRipple;
  private trackActive: HTMLElement;
  tickMarkStatuses: TickMark[];
  TickMark = TickMark;
  eventHandlers: IEventHandler[] = [];

  @bindable.booleanAttr
  discrete: boolean;

  @bindable.booleanAttr
  tickMarks: boolean;

  @bindable.booleanAttr
  range: boolean;

  @bindable.booleanAttr
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    this.foundation?.setDisabled(this.disabled);
  }

  @bindable
  min: string = '0';
  async minChanged() {
    await this.initialised;
    (this.startInput ?? this.endInput)?.setAttribute(attributes.INPUT_MIN, this.min);
    this.foundation?.destroy();
    this.cleanupEventHandlers();
    this.foundation?.init();
    this.foundation?.layout();
  }

  @bindable
  max: string = '100';
  async maxChanged() {
    await this.initialised;
    this.endInput?.setAttribute(attributes.INPUT_MAX, this.max);
    this.foundation?.destroy();
    this.cleanupEventHandlers();
    this.foundation?.init();
    this.foundation?.layout();
  }

  @bindable
  step: string = '1';
  async stepChanged() {
    await this.initialised;
    this.startInput?.setAttribute(attributes.INPUT_STEP, this.step);
    this.endInput?.setAttribute(attributes.INPUT_STEP, this.step);
    this.foundation?.destroy();
    this.cleanupEventHandlers();
    this.foundation?.init();
  }

  @bindable
  valueToAriaValueTextFn: ((value: number) => string) | null = null;

  _value: number = 0;
  get value(): number {
    if (this.foundation) {
      return this.foundation.getValue();
    } else {
      return this._value;
    }
  }

  set value(value: number) {
    this._value = value;
    this.foundation?.setValue(value);
  }

  _valueStart: number = 0;
  get valueStart(): number {
    if (this.foundation) {
      return this.foundation.getValueStart();
    } else {
      return this._valueStart;
    }
  }

  set valueStart(value: number) {
    this._valueStart = value;
    this.foundation?.setValueStart(value);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initialise() {
    // assign initial values explicitly
    this.endInput.setAttribute(attributes.INPUT_MIN, this.min);
    this.endInput.setAttribute(attributes.INPUT_MAX, this.max);
    this.endInput.setAttribute(attributes.INPUT_VALUE, this.value.toString());
    this.endInput.setAttribute(attributes.INPUT_STEP, this.step);
    this.startInput?.setAttribute(attributes.INPUT_VALUE, this.valueStart.toString());
    this.startInput?.setAttribute(attributes.INPUT_STEP, this.step);
  }

  initialSyncWithDOM() {
    this.value = this._value;
    if (this.range) {
      this.valueStart = this._valueStart;
    }
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
      getInputValue: (thumb: Thumb) => this.getInput(thumb)!.value,
      setInputValue: (value: string, thumb: Thumb) => {
        this.getInput(thumb)!.value = value;
      },
      getInputAttribute: (attribute, thumb: Thumb) =>
        this.getInput(thumb)!.getAttribute(attribute),
      setInputAttribute: (attribute, value, thumb: Thumb) => {
        this.getInput(thumb)!.setAttribute(attribute, value);
      },
      removeInputAttribute: (attribute, thumb: Thumb) => {
        this.getInput(thumb)?.removeAttribute(attribute);
      },
      focusInput: (thumb: Thumb) => { this.getInput(thumb)?.focus(); },
      isInputFocused: (thumb: Thumb) => this.getInput(thumb) === document.activeElement,
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
      emitDragStartEvent: (_, thumb: Thumb) => {
        // Emitting event is not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448

        this.getRipple(thumb)?.activate();
      },
      emitDragEndEvent: (_, thumb: Thumb) => {
        // Emitting event is not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448

        this.getRipple(thumb)?.deactivate();
      },
      registerEventHandler: (evtType, handler) => {
        this.listen(evtType, handler);
        this.addEventHandler(this.root, evtType, handler);
      },
      deregisterEventHandler: (evtType, handler) => {
        this.unlisten(evtType, handler);
        this.removeEventHandler(this.root, evtType, handler);
      },
      registerThumbEventHandler: (thumb, evtType, handler) => {
        const thumbEl = this.getThumbEl(thumb);
        if (thumbEl) {
          thumbEl.addEventListener(evtType, handler);
          this.addEventHandler(thumbEl, evtType, handler);
        }
      },
      deregisterThumbEventHandler: (thumb, evtType, handler) => {
        const thumbEl = this.getThumbEl(thumb);
        if (thumbEl) {
          thumbEl.removeEventListener(evtType, handler);
          this.removeEventHandler(thumbEl, evtType, handler);
        }
      },
      registerInputEventHandler: (thumb, evtType, handler) => {
        const thumbInput = this.getInput(thumb);
        if (thumbInput) {
          thumbInput.addEventListener(evtType, handler);
          this.addEventHandler(thumbInput, evtType, handler);
        }
      },
      deregisterInputEventHandler: (thumb, evtType, handler) => {
        const thumbInput = this.getInput(thumb);
        if (thumbInput) {
          thumbInput.removeEventListener(evtType, handler);
          this.removeEventHandler(thumbInput, evtType, handler);
        }
      },
      registerBodyEventHandler: (evtType, handler) => {
        document.body.addEventListener(evtType, handler);
        this.addEventHandler(document.body, evtType, handler);
      },
      deregisterBodyEventHandler: (evtType, handler) => {
        document.body.removeEventListener(evtType, handler);
        this.removeEventHandler(document.body, evtType, handler);
      },
      registerWindowEventHandler: (evtType, handler) => {
        window.addEventListener(evtType, handler);
        this.addEventHandler(window, evtType, handler);
      },
      deregisterWindowEventHandler: (evtType, handler) => {
        window.removeEventListener(evtType, handler);
        this.removeEventHandler(window, evtType, handler);
      },
      // tslint:enable:object-literal-sort-keys
    };
    return new MdcSliderFoundationAurelia(adapter);
  }

  addEventHandler(element: HTMLElement | Window, evtType: EventType, handler: SpecificEventListener<EventType>) {
    this.eventHandlers.push({ element, evtType, handler });
  }

  removeEventHandler(element: HTMLElement | Window, evtType: EventType, handler: SpecificEventListener<EventType>) {
    const i = this.eventHandlers.findIndex(x => x.element === element && x.evtType === evtType && x.handler === handler);
    if (i !== -1) {
      this.eventHandlers.splice(i, 1);
    }
  }

  cleanupEventHandlers() {
    this.eventHandlers.forEach(x => {
      x.element.removeEventListener(x.evtType, x.handler);
    });
    this.eventHandlers = [];
  }

  getThumbEl(thumb: Thumb) {
    return thumb === Thumb.END ? this.endThumb : this.startThumb;
  }

  private getInput(thumb: Thumb) {
    return thumb === Thumb.END ? this.endInput : this.startInput;
  }

  private getRipple(thumb: Thumb) {
    return thumb === Thumb.END ? this.endRipple : this.startRipple;
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
    value: {
      get(this: IMdcSliderElement) {
        return this.au.controller.viewModel.value;
      },
      set(this: IMdcSliderElement, value: number) {
        this.au.controller.viewModel.value = value;
      },
      configurable: true
    },
    valuestart: {
      get(this: IMdcSliderElement) {
        return this.au.controller.viewModel.valueStart;
      },
      set(this: IMdcSliderElement, value: number) {
        this.au.controller.viewModel.valueStart = value;
      },
      configurable: true
    },
    focus: {
      value(this: IMdcSliderElement) {
        this.au.controller.viewModel.focus();
      },
      configurable: true
    },
    blur: {
      value(this: IMdcSliderElement) {
        this.au.controller.viewModel.blur();
      },
      configurable: true
    }
  });
}
