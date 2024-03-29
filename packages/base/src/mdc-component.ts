import { MDCFoundation } from '@material/base';

export abstract class MdcComponent<FoundationType extends MDCFoundation> {
  constructor(public root: HTMLElement) { }

  foundation?: FoundationType;
  continueAttaching: boolean;

  initialised = this.createInitiliasedPromise();
  protected initialisedResolve: (value?: unknown) => void;

  private async createInitiliasedPromise() {
    return new Promise(r => this.initialisedResolve = r);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async initialise() { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initialSyncWithDOM() { }

  async attached() {
    this.continueAttaching = true;
    await this.initialise();
    // detached might be called straight after attached starts
    // do not continue attaching if that's the case
    if (!this.continueAttaching) {
      return;
    }
    this.foundation = this.getDefaultFoundation();
    this.foundation.init();
    this.initialisedResolve();
    this.initialSyncWithDOM();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  destroy() { }

  detached() {
    this.continueAttaching = false;
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
   * @hidden
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */
  emit<T>(evtType: string, evtData: T, shouldBubble = false) {
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
