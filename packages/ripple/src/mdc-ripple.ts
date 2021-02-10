import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCRippleFoundation, MDCRippleAdapter, util } from '@material/ripple';
import { matches } from '@material/dom/ponyfill';
import { applyPassive } from '@material/dom/events';
import { customAttribute, bindable, inject } from 'aurelia';

@inject(Element)
@customAttribute('mdc-ripple')
export class MdcRipple extends MdcComponent<MDCRippleFoundation> {
  inputBindingPromiseResolver: (value?: unknown) => void;
  inputBindingPromise = new Promise(r => this.inputBindingPromiseResolver = r);
  @bindable
  input?: HTMLInputElement;
  inputChanged() {
    this.inputBindingPromiseResolver();
  }

  @bindable
  surface?: HTMLElement;

  @bindable({ set: booleanAttr })
  disabled: boolean;

  @bindable({ set: booleanAttr })
  unbounded: boolean;
  async unboundedChanged() {
    await this.initialised;
    this.foundation?.setUnbounded(Boolean(this.unbounded));
  }

  @bindable({ set: booleanAttr })
  activeSurface: boolean;

  @bindable({ set: booleanAttr })
  noClass: boolean;

  @bindable({ set: booleanAttr })
  primary: boolean;

  @bindable({ set: booleanAttr })
  accent: boolean;

  // eslint-disable-next-line @typescript-eslint/require-await
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
    // TODO check if this is still needed
    // const inputBinding = (this.root as IMdcRippleElement).au['mdc-ripple'].boundProperties.find(x => x.binding.targetProperty === 'input');
    // if (inputBinding) {
    // await this.inputBindingPromise;
    // }
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
      // boundProperties: { binding: Binding & { targetProperty: string }; observer: BehaviorPropertyObserver }[];
    };
  };
}
