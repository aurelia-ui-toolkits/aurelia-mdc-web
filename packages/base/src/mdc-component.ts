import { MDCFoundation } from '@material/base';

export abstract class MdcComponent<FoundationType extends MDCFoundation> {
  constructor(public root: HTMLElement) { }

  foundation: FoundationType;

  initialised = new Promise(r => this.initialisedResolve = r);
  private initialisedResolve: () => void;

  async initialise() { }

  async attached() {
    await this.initialise();
    this.foundation = this.getDefaultFoundation();
    this.foundation.init();
    this.initialisedResolve();
  }

  destroy() { }

  detached() {
    this.destroy();
    this.foundation.destroy();
  }

  abstract getDefaultFoundation(): FoundationType;

  listen(evtType: string, handler: EventListener, options?: AddEventListenerOptions | boolean) {
    this.root.addEventListener(evtType, handler, options);
  }

  unlisten(evtType: string, handler: EventListener, options?: AddEventListenerOptions | boolean) {
    this.root.removeEventListener(evtType, handler, options);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */
  emit<T extends object>(evtType: string, evtData: T, shouldBubble = false) {
    let evt: CustomEvent<T>;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent<T>(evtType, {
        bubbles: shouldBubble,
        detail: evtData,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root.dispatchEvent(evt);
  }
}
