import { MDCFoundation } from '@material/base';

export abstract class MdcComponent<FoundationType extends MDCFoundation> {
  constructor(protected root: HTMLElement) { }

  foundation: FoundationType;

  attached() {
    this.foundation = this.getDefaultFoundation();
    this.foundation.init();
  }

  detached() {
    this.foundation.destroy();
  }

  abstract getDefaultFoundation(): FoundationType;

  listen(evtType: string, handler: EventListener, options?: AddEventListenerOptions | boolean) {
    this.root.addEventListener(evtType, handler, options);
  }

  unlisten(evtType: string, handler: EventListener, options?: AddEventListenerOptions | boolean) {
    this.root.removeEventListener(evtType, handler, options);
  }
}
