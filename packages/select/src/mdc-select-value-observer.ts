import { DOM } from 'aurelia-pal';
import { subscriberCollection, EventSubscriber } from 'aurelia-binding';
import { IMdcSelectElement } from './mdc-select';

interface ISubscriberCollection {
  addSubscriber(context: unknown, callable: unknown): boolean;
  removeSubscriber(context: unknown, callable: unknown): boolean;
  callSubscribers(newValue: unknown, oldValue: unknown): void;
  hasSubscribers(): boolean;
  hasSubscriber(context: unknown, callable: unknown): boolean;
}

/**
 * @hidden
 * The observer only passes values to the element if options has been set at least once.
 * When the options are set for the first time the observer passes the value to the element.
 * Subsequent options changes pull the value from the element.
 * Subsequent value changes are passed to the element.
 */
@subscriberCollection()
export class MdcSelectValueObserver {
  constructor(element: Element, private handler: EventSubscriber) {
    this.element = element as IMdcSelectElement;
  }

  value: unknown;
  oldValue: unknown;
  element: IMdcSelectElement;
  domObserver: MutationObserver | null;
  optionsWereSet: boolean;

  setElementValue(skipNotify: boolean = false) {
    // do not pass the value to the element if options has never been set
    // the value will be passed on when options do arrive
    if (this.optionsWereSet) {
      this.element.au.controller.viewModel.setValue(this.value, skipNotify);
    }
  }

  getValue(): unknown {
    return this.value;
  }

  setValue(newValue: unknown) {
    if (this.value === newValue) {
      return;
    }
    // assign and sync element.
    this.oldValue = this.value;
    this.value = newValue;
    this.setElementValue();
    this.notify();
  }

  synchronizeValue() {
    const value = this.element.value;
    if (value !== this.value) {
      this.oldValue = this.value;
      this.value = value;
      this.notify();
    }
  }

  notify() {
    const oldValue = this.oldValue;
    const newValue = this.value;

    (this as unknown as ISubscriberCollection).callSubscribers(newValue, oldValue);
  }

  handleEvent() {
    this.synchronizeValue();
  }

  subscribe(context: unknown, callable: unknown) {
    if (!(this as unknown as ISubscriberCollection).hasSubscribers()) {
      this.handler.subscribe(this.element, this);
    }
    (this as unknown as ISubscriberCollection).addSubscriber(context, callable);
  }

  unsubscribe(context: unknown, callable: unknown) {
    if ((this as unknown as ISubscriberCollection).removeSubscriber(context, callable) && !(this as unknown as ISubscriberCollection).hasSubscribers()) {
      this.handler.dispose();
    }
  }

  bind() {
    this.domObserver = DOM.createMutationObserver((records: MutationRecord[]) => {
      if (records.find(x => x.type === 'childList'
        && (Array.from(x.addedNodes).find(y => (y as HTMLElement).tagName === 'MDC-LIST-ITEM')
          || Array.from(x.removedNodes).find(y => (y as HTMLElement).tagName === 'MDC-LIST-ITEM'))
      )) {
        if (!this.optionsWereSet) {
          this.optionsWereSet = true;
          // if options are set for the first time pass the current value to the element
          this.setElementValue(true);
        }
        this.synchronizeValue();
      }
    });
    this.domObserver.observe(this.element, { childList: true, subtree: true, characterData: true });
  }

  unbind() {
    this.domObserver?.disconnect();
    this.domObserver = null;
  }
}
