import { MdcComponent, booleanAttr } from '@aurelia-mdc-web/base';
import { MDCRippleFoundation, MDCRippleAdapter, util } from '@material/ripple';
import { matches } from '@material/dom/ponyfill';
import { applyPassive } from '@material/dom/events';
import { customAttribute, bindable, inject } from 'aurelia';

@inject(Element)
@customAttribute('mdc-ripple')
export class MdcRipple extends MdcComponent<MDCRippleFoundation> {
  @bindable()
  input?: HTMLInputElement;

  @bindable()
  surface?: HTMLElement;

  @bindable()
  computeBoundingRect: () => ClientRect;

  @bindable({ set: booleanAttr })
  disabled: boolean;

  @bindable({ set: booleanAttr })
  unbounded: boolean;
  unboundedChanged() {
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

  attaching() {
    if (!this.noClass) {
      (this.surface ?? this.root).classList.add('mdc-ripple-surface');
      if (this.primary) {
        (this.surface ?? this.root).classList.add('mdc-ripple-surface--primary');
      }
      if (this.accent) {
        (this.surface ?? this.root).classList.add('mdc-ripple-surface--accent');
      }
    }
  }

  initialSyncWithDOM() {
    this.unboundedChanged();
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
      computeBoundingRect: this.computeBoundingRect ?? (() => (this.surface ?? this.root).getBoundingClientRect()),
      containsEventTarget: (target) => this.root.contains(target as Node),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) => {
        if (this.input) {
          this.input.removeEventListener(evtType, handler, applyPassive());
        } else {
          this.root.removeEventListener(evtType, handler, applyPassive());
        }
      },
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      isSurfaceActive: () => this.activeSurface && matches(this.input ?? this.root, ':active'),
      isSurfaceDisabled: () => this.disabled,
      isUnbounded: () => this.unbounded,
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
      registerInteractionHandler: (evtType, handler) => {
        if (this.input) {
          this.input.addEventListener(evtType, handler, applyPassive());
        } else {
          this.root.addEventListener(evtType, handler, applyPassive());
        }
      },
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      removeClass: (className) => (this.surface ?? this.root).classList.remove(className),
      updateCssVariable: (varName, value) => (this.surface ?? this.root).style.setProperty(varName, value),
    };
  }
}

/** @hidden */
export interface IMdcRippleElement extends HTMLElement {
  $au: {
    'au:resource:custom-attribute:mdc-ripple': {
      viewModel: MdcRipple;
      // boundProperties: { binding: Binding & { targetProperty: string }; observer: BehaviorPropertyObserver }[];
    };
  };
}
