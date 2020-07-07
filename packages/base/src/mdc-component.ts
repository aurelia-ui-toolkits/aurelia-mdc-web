import { MDCFoundation } from '@material/base';

export abstract class MdcComponent<FoundationType extends MDCFoundation> {
  constructor(public root: HTMLElement) { }

  foundation?: FoundationType;

  initialised = this.createInitiliasedPromise();
  private initialisedResolve: () => void;

  private createInitiliasedPromise() {
    return new Promise(r => this.initialisedResolve = r);
  }

  async initialise() { }

  initialSyncWithDOM() { }

  async attached() {
    await this.initialise();
    this.foundation = this.getDefaultFoundation();
    this.foundation.init();
    this.initialisedResolve();
    this.initialSyncWithDOM();
  }

  destroy() { }

  detached() {
    this.destroy();
    this.foundation?.destroy();
    this.foundation = undefined;
    this.initialised = this.createInitiliasedPromise();
  }

  abstract getDefaultFoundation(): FoundationType;

  listen(evtType: string, handler: EventListener | EventListenerObject, options?: AddEventListenerOptions | boolean) {
    this.root.addEventListener(evtType, handler, options);
  }

  unlisten(evtType: string, handler: EventListener | EventListenerObject, options?: AddEventListenerOptions | boolean) {
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
