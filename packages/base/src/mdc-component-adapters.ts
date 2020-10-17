import { ObserverLocator, IObjectObservationAdapter, AttrSyntax } from '@aurelia/runtime';
import { IAttrSyntaxTransformer } from '@aurelia/runtime-html';
import { inject, LifecycleFlags } from 'aurelia';

export interface MdcElementObserverAdapter {
  tagName: string;
  properties: Record<string, MdcElementPropertyObserver>;
}

export interface MdcElementPropertyObserver extends IObjectObservationAdapter {
  shouldDefaultToTwoWay: boolean;
}

@inject(ObserverLocator)
export class MdcComponentAdapters {
  private adaptersCreated: boolean = false;
  private adapters: Record<string, MdcElementObserverAdapter> = {};
  private bindingModeIntercepted: boolean;

  constructor(private observerLocator: ObserverLocator, @IAttrSyntaxTransformer private syntaxTransformer: IAttrSyntaxTransformer) { }

  private createAdapter() {
    this.observerLocator.addAdapter({
      getObserver: (flags: LifecycleFlags, obj: unknown, propertyName: string, descriptor: PropertyDescriptor) => {
        if (!(obj instanceof Element)) {
          return null;
        }
        const tagName = obj.getAttribute('as-element') ?? obj.tagName;
        const elAdapters = this.adapters[tagName];
        if (!elAdapters) {
          return null;
        }
        const propertyAdapter = elAdapters.properties[propertyName];
        if (propertyAdapter) {
          const observer = propertyAdapter.getObserver(flags, obj, propertyName, descriptor);
          if (observer) {
            return observer;
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
    const originalFn = this.syntaxTransformer.transform;

    this.syntaxTransformer.transform = originalFn;

    this.syntaxTransformer.transform = function (node: HTMLElement, attrSyntax: AttrSyntax): void {
      if (attrSyntax.command === 'bind') {
        const tagName = node.getAttribute('as-element') ?? node.tagName;
        if (mdc.adapters[tagName]?.properties[attrSyntax.target]?.shouldDefaultToTwoWay) {
          attrSyntax.command = 'two-way';
        }
      }
      originalFn.call(this, node, attrSyntax);
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
