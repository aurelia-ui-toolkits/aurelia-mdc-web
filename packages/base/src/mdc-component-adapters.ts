import { inject, bindingMode, ObserverLocator, InternalPropertyObserver } from 'aurelia-framework';
import { SyntaxInterpreter } from 'aurelia-templating-binding';

export type GetElementObserver = (
  obj: Element,
  propertyName: string,
  observerLocator: ObserverLocator,
  descriptor?: PropertyDescriptor | null) => InternalPropertyObserver | null;

export interface MdcElementObserverAdapter {
  tagName: string;
  properties: Record<string, MdcElementPropertyObserver>;
}

export interface MdcElementPropertyObserver {
  defaultBindingMode: bindingMode;
  getObserver: GetElementObserver;
}

@inject(ObserverLocator)
export class MdcComponentAdapters {
  private adaptersCreated: boolean = false;
  private adapters: Record<string, MdcElementObserverAdapter> = {};
  private bindingModeIntercepted: boolean;

  constructor(private observerLocator: ObserverLocator) { }

  private createAdapter() {
    this.observerLocator.addAdapter({
      getObserver: (obj: Element, propertyName: string, descriptor: PropertyDescriptor) => {
        if (obj instanceof Element) {
          const tagName = obj.getAttribute('as-element') ?? obj.tagName;
          const elAdapters = this.adapters[tagName];
          if (!elAdapters) {
            return null;
          }
          const propertyAdapter = elAdapters.properties[propertyName];
          if (propertyAdapter) {
            const observer = propertyAdapter.getObserver(obj, propertyName, this.observerLocator, descriptor);
            if (observer) {
              return observer;
            }
          }
        }
        return null;
      }
    });
  }

  private getOrCreateMdcElementAdapters(tagName: string): MdcElementObserverAdapter {
    if (!this.adaptersCreated) {
      this.createAdapter();
      this.adaptersCreated = true;
    }
    const adapters = this.adapters;
    let elementAdapters = adapters[tagName] || adapters[tagName.toLowerCase()];
    if (!elementAdapters) {
      elementAdapters = adapters[tagName] = adapters[tagName.toLowerCase()] = { tagName, properties: {} };
    }
    return elementAdapters;
  }

  private interceptDetermineDefaultBindingMode(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const mdc = this;
    const originalFn = SyntaxInterpreter.prototype.determineDefaultBindingMode;

    SyntaxInterpreter.prototype.determineDefaultBindingMode = function (
      this: SyntaxInterpreter,
      element: Element,
      attrName: string,
      context?: unknown
    ) {
      const tagName = element.getAttribute('as-element') ?? element.tagName;
      const elAdapters = mdc.adapters[tagName];
      if (elAdapters) {
        const propertyAdapter = elAdapters.properties[attrName];
        if (propertyAdapter) {
          return propertyAdapter.defaultBindingMode;
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return originalFn.call(this, element, attrName, context);
    };
  }

  public addMdcElementObserverAdapter(tagName: string, properties: Record<string, MdcElementPropertyObserver>): void {
    if (!this.adaptersCreated) {
      this.createAdapter();
      this.adaptersCreated = true;
    }
    const elementAdapters = this.getOrCreateMdcElementAdapters(tagName);
    Object.assign(elementAdapters.properties, properties);
  }

  public registerMdcElementConfig(observerAdapter: MdcElementObserverAdapter) {
    if (!this.bindingModeIntercepted) {
      this.interceptDetermineDefaultBindingMode();
      this.bindingModeIntercepted = true;
    }
    this.addMdcElementObserverAdapter(observerAdapter.tagName.toUpperCase(), observerAdapter.properties);
  }
}
