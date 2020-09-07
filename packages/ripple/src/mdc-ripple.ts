import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCRippleFoundation, MDCRippleAdapter, util } from '@material/ripple';
import { matches } from '@material/dom/ponyfill';
import { applyPassive } from '@material/dom/events';
import { inject, customAttribute, Binding, BehaviorPropertyObserver } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@customAttribute('mdc-ripple')
export class MdcRipple extends MdcComponent<MDCRippleFoundation> {
  inputBindingPromiseResolver: () => void;
  inputBindingPromise = new Promise(r => this.inputBindingPromiseResolver = r);
  @bindable
  input?: HTMLInputElement;
  inputChanged() {
    this.inputBindingPromiseResolver();
  }

  @bindable
  surface?: HTMLElement;

  @bindable.booleanAttr
  disabled: boolean;

  @bindable.booleanAttr
  unbounded: boolean;
  async unboundedChanged() {
    await this.initialised;
    this.foundation?.setUnbounded(Boolean(this.unbounded));
  }

  @bindable.booleanAttr
  activeSurface: boolean;

  @bindable.booleanAttr
  noClass: boolean;

  @bindable.booleanAttr
  primary: boolean;

  @bindable.booleanAttr
  accent: boolean;

  async initialise() {
    if (!this.noClass) {
      (this.surface ?? this.root).classList.add('mdc-ripple-surface');
      if (this.primary) {
        (this.surface ?? this.root).classList.add('mdc-ripple-surface--primary');
      }
      if (this.accent) {
        (this.surface ?? this.root).classList.add('mdc-ripple-surface--accent');
      }
    }
    const inputBinding = (this.root as IMdcRippleElement).au['mdc-ripple'].boundProperties.find(x => x.binding.targetProperty === 'input');
    if (inputBinding) {
      await this.inputBindingPromise;
    }
  }

  activate() {
    this.foundation?.activate();
  }

  deactivate() {
    this.foundation?.deactivate();
  }

  layout() {
    this.foundation?.layout();
  }

  getDefaultFoundation() {
    return new MDCRippleFoundation(this.createAdapter());
  }

  createAdapter(): MDCRippleAdapter {
    return {
      addClass: (className) => (this.surface ?? this.root).classList.add(className),
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      computeBoundingRect: () => (this.surface ?? this.root).getBoundingClientRect(),
      containsEventTarget: (target) => this.root.contains(target as Node),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) => (this.input ?? this.root).removeEventListener(evtType, handler, applyPassive()),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      isSurfaceActive: () => this.activeSurface && matches(this.input ?? this.root, ':active'),
      isSurfaceDisabled: () => this.disabled,
      isUnbounded: () => this.unbounded,
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
      registerInteractionHandler: (evtType, handler) => (this.input ?? this.root).addEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      removeClass: (className) => (this.surface ?? this.root).classList.remove(className),
      updateCssVariable: (varName, value) => (this.surface ?? this.root).style.setProperty(varName, value),
    };
  }
}

/** @hidden */
export interface IMdcRippleElement extends HTMLElement {
  au: {
    'mdc-ripple': {
      viewModel: MdcRipple;
      boundProperties: { binding: Binding & { targetProperty: string }; observer: BehaviorPropertyObserver }[];
    };
  };
}
