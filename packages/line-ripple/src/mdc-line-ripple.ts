import { inject, customElement, inlineView } from 'aurelia-framework';
import { MdcComponent } from '@aurelia-mdc-web/base';
import { MDCLineRippleFoundation, MDCLineRippleAdapter } from '@material/line-ripple';

@inject(Element)
@customElement('mdc-line-ripple')
@inlineView('<template class="mdc-line-ripple"></template>')
export class MdcLineRipple extends MdcComponent<MDCLineRippleFoundation> {
  /**
   * Activates the line ripple
   */
  activate() {
    this.foundation.activate();
  }

  /**
   * Deactivates the line ripple
   */
  deactivate() {
    this.foundation.deactivate();
  }

  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */
  setRippleCenter(xCoordinate: number) {
    this.foundation.setRippleCenter(xCoordinate);
  }

  getDefaultFoundation() {
    const adapter: MDCLineRippleAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      setStyle: (propertyName, value) => (this.root as HTMLElement).style.setProperty(propertyName, value),
      registerEventHandler: (evtType, handler) => this.listen(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.unlisten(evtType, handler),
    };
    return new MDCLineRippleFoundation(adapter);
  }
}
