import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCRippleFoundation, MDCRippleCapableSurface, MDCRippleAdapter, util } from '@material/ripple';
import { matches } from '@material/dom/ponyfill';
import { applyPassive } from '@material/dom/events';

export class MdcRipple extends MdcComponent<MDCRippleFoundation> implements MDCRippleCapableSurface {
  static createAdapter(instance: MDCRippleCapableSurface): MDCRippleAdapter {
    return {
      addClass: (className) => instance.root.classList.add(className),
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      computeBoundingRect: () => instance.root.getBoundingClientRect(),
      containsEventTarget: (target) => instance.root.contains(target as Node),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) => (instance.root as HTMLElement).removeEventListener(evtType, handler, applyPassive()),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      isSurfaceActive: () => matches(instance.root, ':active'),
      isSurfaceDisabled: () => Boolean(instance.disabled),
      isUnbounded: () => Boolean(instance.unbounded),
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
      registerInteractionHandler: (evtType, handler) => (instance.root as HTMLElement).addEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      removeClass: (className) => instance.root.classList.remove(className),
      updateCssVariable: (varName, value) => (instance.root as HTMLElement).style.setProperty(varName, value),
    };
  }

  disabled = false;

  private unbounded_?: boolean;

  get unbounded(): boolean {
    return Boolean(this.unbounded_);
  }

  set unbounded(unbounded: boolean) {
    this.unbounded_ = Boolean(unbounded);
    this.foundation.setUnbounded(Boolean(this.unbounded_));
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
    return new MDCRippleFoundation(MdcRipple.createAdapter(this));
  }
}
