import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCRippleFoundation, MDCRippleAdapter, util } from '@material/ripple';
import { matches } from '@material/dom/ponyfill';
import { applyPassive } from '@material/dom/events';
import { inject, customAttribute } from 'aurelia-framework';
import { bindable } from 'aurelia-typed-observable-plugin';

@inject(Element)
@customAttribute('mdc-ripple')
export class MdcRipple extends MdcComponent<MDCRippleFoundation> {
  @bindable
  input?: HTMLInputElement;

  @bindable
  surface?: HTMLElement;

  @bindable.booleanAttr
  disabled: boolean;

  @bindable.booleanAttr
  unbounded: boolean;
  async unboundedChanged(){
    await this.initialised;
    this.foundation.setUnbounded(Boolean(this.unbounded));
  }

  activate() {
    this.foundation.activate();
  }

  deactivate() {
    this.foundation.deactivate();
  }

  layout() {
    this.foundation.layout();
  }

  getDefaultFoundation() {
    return new MDCRippleFoundation(this.createAdapter());
  }

  createAdapter(): MDCRippleAdapter {
    return {
      addClass: (className) => (this.surface || this.root).classList.add(className),
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      computeBoundingRect: () => this.root.getBoundingClientRect(),
      containsEventTarget: (target) => this.root.contains(target as Node),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) => (this.input ?? this.root).removeEventListener(evtType, handler, applyPassive()),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      isSurfaceActive: () => matches(this.input ?? this.root, ':active'),
      isSurfaceDisabled: () => this.disabled,
      isUnbounded: () => this.unbounded,
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
      registerInteractionHandler: (evtType, handler) => (this.input ?? this.root).addEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      removeClass: (className) => (this.surface || this.root).classList.remove(className),
      updateCssVariable: (varName, value) => (this.surface || this.root).style.setProperty(varName, value),
    };
  }

}
