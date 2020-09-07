import { MdcComponent, Size } from '@aurelia-mdc-web/base';
import { MDCSliderAdapter, strings } from '@material/slider';
import { bindable } from 'aurelia-typed-observable-plugin';
import { inject, useView, PLATFORM, customElement, observable } from 'aurelia-framework';
import { applyPassive } from '@material/dom/events';
import { MdcSliderFoundationAurelia } from './mdc-slider-foundation-aurelia';

strings.INPUT_EVENT = strings.INPUT_EVENT.toLowerCase();
strings.CHANGE_EVENT = strings.CHANGE_EVENT.toLowerCase();

@inject(Element)
@useView(PLATFORM.moduleName('./mdc-slider.html'))
@customElement('mdc-slider')
export class MdcSlider extends MdcComponent<MdcSliderFoundationAurelia> {
  constructor(root: HTMLElement) {
    super(root);
    defineMdcSliderElementApis(this.root);
  }

  private thumbContainer_: HTMLElement;
  private track_: HTMLElement;
  private pinValueMarker_: HTMLElement;
  private trackMarkerContainer_: HTMLElement;

  @observable
  size: Size;
  async sizeChanged() {
    await this.initialised;
    this.foundation?.layout();
  }

  @bindable.booleanAttr
  discrete: boolean;

  @bindable.booleanAttr
  markers: boolean;

  @bindable.booleanAttr
  disabled: boolean;
  async disabledChanged() {
    await this.initialised;
    this.foundation?.setDisabled(this.disabled);
  }

  @bindable.number
  min: number = 0;
  async minChanged() {
    await this.initialised;
    if (this.min > this.max) {
      this.max = this.min;
    }
    this.foundation?.setMax(this.max);
    this.foundation?.setMin(this.min);
  }

  @bindable.number
  max: number = 100;
  async maxChanged() {
    await this.initialised;
    this.foundation?.setMax(this.max);
  }

  @bindable.number
  step: number = 1;
  async stepChanged() {
    await this.initialised;
    this.foundation?.setStep(this.step);
  }

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

  initialSyncWithDOM() {
    this.value = this.initialValue;
    this.foundation?.setupTrackMarker();
  }

  getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCSliderAdapter = {
      hasClass: (className) => this.root.classList.contains(className),
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      getAttribute: (name) => this.root.getAttribute(name),
      setAttribute: (name, value) => this.root.setAttribute(name, value),
      removeAttribute: (name) => this.root.removeAttribute(name),
      computeBoundingRect: () => this.root.getBoundingClientRect(),
      getTabIndex: () => (this.root).tabIndex,
      registerInteractionHandler: (evtType, handler) => this.listen(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) => this.unlisten(evtType, handler, applyPassive()),
      registerThumbContainerInteractionHandler: (evtType, handler) => {
        this.thumbContainer_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: (evtType, handler) => {
        this.thumbContainer_.removeEventListener(
          evtType, handler, applyPassive());
      },
      registerBodyInteractionHandler: (evtType, handler) => document.body.addEventListener(evtType, handler),
      deregisterBodyInteractionHandler: (evtType, handler) => document.body.removeEventListener(evtType, handler),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      notifyInput: () => this.emit(strings.INPUT_EVENT, this),  // TODO(acdvorak): Create detail interface
      notifyChange: () => this.emit(strings.CHANGE_EVENT, this),  // TODO(acdvorak): Create detail interface
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => this.track_.style.setProperty(propertyName, value),
      setMarkerValue: (value) => this.pinValueMarker_.innerText = value.toLocaleString(),
      setTrackMarkers: (step, max, min) => {
        const stepStr = step.toLocaleString();
        const maxStr = max.toLocaleString();
        const minStr = min.toLocaleString();
        // keep calculation in css for better rounding/subpixel behavior
        const markerAmount = `((${maxStr} - ${minStr}) / ${stepStr})`;
        const markerWidth = '2px';
        const markerBkgdImage = `linear-gradient(to right, currentColor ${
          markerWidth}, transparent 0)`;
        const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${
          markerAmount}) 100% repeat-x`;
        const markerBkgdShorthand = `${markerBkgdImage} ${markerBkgdLayout}`;
        this.trackMarkerContainer_.style.setProperty(
          'background', markerBkgdShorthand);
      },
      isRTL: () => getComputedStyle(this.root).direction === 'rtl',
    };
    return new MdcSliderFoundationAurelia(adapter);
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
