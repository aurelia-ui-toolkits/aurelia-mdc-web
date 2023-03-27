import {
  CollectionKind,
  subscriberCollection,
  AccessorType,
} from '@aurelia/runtime';

import type {
  ICollectionObserver,
  IndexMap,
  IObserver,
  IObserverLocator,
  ISubscriber,
  ISubscriberCollection,
} from '@aurelia/runtime';

import { INode, CustomElement } from '@aurelia/runtime-html';
import { IMdcSelectElement, MdcSelect } from './mdc-select';

// const hasOwn = Object.prototype.hasOwnProperty;
const childObserverOptions = {
  childList: true,
  subtree: true,
  characterData: true
};

// function defaultMatcher(a: unknown, b: unknown): boolean {
//   return a === b;
// }

export interface IOptionElement extends HTMLOptionElement {
  model?: unknown;
}

export interface MdcSelectValueObserver extends
  ISubscriberCollection { }

export interface INodeObserverConfigBase {
  /**
   * Indicates the list of events can be used to observe a particular property
   */
  readonly events: string[];
  /**
   * Indicates whether this property is readonly, so observer wont attempt to assign value
   * example: input.files
   */
  readonly readonly?: boolean;
  /**
   * A default value to assign to the corresponding property if the incoming value is null/undefined
   */
  readonly default?: unknown;
}


export interface INodeObserver extends IObserver {
  /**
   * Instruct this node observer event observation behavior
   */
  useConfig(config: INodeObserverConfigBase): void;
}

export class MdcSelectValueObserver implements INodeObserver {
  public currentValue: unknown = void 0;
  public oldValue: unknown = void 0;

  public readonly obj: IMdcSelectElement;
  public config: INodeObserverConfigBase;

  public hasChanges: boolean = false;
  // ObserverType.Layout is not always true
  // but for simplicity, always treat as such
  public type: AccessorType = AccessorType.Node | AccessorType.Observer | AccessorType.Layout;

  public arrayObserver?: ICollectionObserver<CollectionKind.array> = void 0;
  public nodeObserver?: MutationObserver = void 0;
  private readonly _observerLocator: IObserverLocator;

  private observing: boolean = false;
  private listened: boolean = false;

  public constructor(
    obj: INode,
    // deepscan-disable-next-line
    _key: PropertyKey,
    config: INodeObserverConfigBase,
    observerLocator: IObserverLocator,
  ) {
    this.obj = obj as unknown as IMdcSelectElement;
    this.config = config;
    this._observerLocator = observerLocator;
  }

  optionsWereSet: boolean;

  setElementValue(skipNotify: boolean) {
    // do not pass the value to the element if options has never been set
    // the value will be passed on when options do arrive
    if (this.optionsWereSet) {
      CustomElement.for<MdcSelect>(this.obj).viewModel.setValue(this.currentValue, skipNotify);
    }
  }

  public getValue(): unknown {
    // is it safe to assume the observer has the latest value?
    // todo: ability to turn on/off cache based on type
    return this.observing
      ? this.currentValue
      // : this.obj.multiple
      //   ? Array.from(this.obj.options).map(o => o.value)
      : this.obj.value;
  }

  public setValue(newValue: unknown): void {
    this.currentValue = newValue;
    this.hasChanges = newValue !== this.oldValue;
    // this.observeArray(newValue instanceof Array ? newValue : null);
    if (this.optionsWereSet) {
      this.flushChanges();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public flushChanges(): void {
    if (this.hasChanges) {
      this.hasChanges = false;
      this.synchronizeOptions();
    }
  }

  public handleCollectionChange(): void {
    // always sync "selected" property of <options/>
    // immediately whenever the array notifies its mutation
    this.synchronizeOptions();
  }

  public notify(): void {
    const oldValue = this.oldValue;
    const newValue = this.currentValue;
    if (newValue === oldValue) {
      return;
    }
    this.subs.notify(newValue, oldValue);
  }

  public handleEvent(): void {
    const shouldNotify = this.synchronizeValue();
    if (shouldNotify) {
      this.subs.notify(this.currentValue, this.oldValue);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public synchronizeOptions(_indexMap?: IndexMap): void {
    this.setElementValue(true);
    // const { currentValue, obj } = this;
    //   // const isArray = Array.isArray(currentValue);
    //   // const matcher = obj.matcher !== void 0 ? obj.matcher : defaultMatcher;
    //   // const matcher = defaultMatcher;
    //   const options = CustomElement.for<MdcSelect>(obj).viewModel.items;
    //   let i = options.length;

    //   while (i-- > 0) {
    //     // const option = options[i];
    //     // const optionValue = hasOwn.call(option, 'model') ? option.model : option.value;
    //     // const optionValue = option.value;
    //     // if (isArray) {
    //     //   option.selected = (currentValue as unknown[]).findIndex(item => !!matcher(optionValue, item)) !== -1;
    //     //   continue;
    //     // }
    //     if (!this.optionsWereSet) {
    //       this.optionsWereSet = true;
    //       this.setElementValue(true);
    //     }
    //     // option.selected = !!matcher(optionValue, currentValue);
    //   }
  }

  public synchronizeValue(): boolean {
    // Spec for synchronizing value from `<select/>`  to `SelectObserver`
    // When synchronizing value to observed <select/> element, do the following steps:
    // A. If `<select/>` is multiple
    //    1. Check if current value, called `currentValue` is an array
    //      a. If not an array, return true to signal value has changed
    //      b. If is an array:
    //        i. gather all current selected <option/>, in to array called `values`
    //        ii. loop through the `currentValue` array and remove items that are nolonger selected based on matcher
    //        iii. loop through the `values` array and add items that are selected based on matcher
    //        iv. Return false to signal value hasn't changed
    // B. If the select is single
    //    1. Let `value` equal the first selected option, if no option selected, then `value` is `null`
    //    2. assign `this.currentValue` to `this.oldValue`
    //    3. assign `value` to `this.currentValue`
    //    4. return `true` to signal value has changed
    const obj = this.obj;
    const options = CustomElement.for<MdcSelect>(obj).viewModel.items ?? [];
    const len = options.length;
    // const currentValue = this.currentValue;
    let i = 0;

    /*
    if (obj.multiple) {
      // A.
      if (!(currentValue instanceof Array)) {
        // A.1.a
        return true;
      }
      // A.1.b
      // multi select
      let option: IOptionElement;
      const matcher = obj.matcher ?? defaultMatcher;
      // A.1.b.i
      const values: unknown[] = [];
      while (i < len) {
        option = options[i];
        if (option.selected) {
          values.push(hasOwn.call(option, 'model')
            ? option.model
            : option.value
          );
        }
        ++i;
      }
      // A.1.b.ii
      i = 0;
      while (i < currentValue.length) {
        const a = currentValue[i];
        // Todo: remove arrow fn
        if (values.findIndex(b => !!matcher(a, b)) === -1) {
          currentValue.splice(i, 1);
        } else {
          ++i;
        }
      }
      // A.1.b.iii
      i = 0;
      while (i < values.length) {
        const a = values[i];
        // Todo: remove arrow fn
        if (currentValue.findIndex(b => !!matcher(a, b)) === -1) {
          currentValue.push(a);
        }
        ++i;
      }
      // A.1.b.iv
      return false;
    }
    */
    // B. single select
    // B.1
    let value: unknown = null;
    while (i < len) {
      const option = options[i];
      if (option.value === this.obj.value) {
        // value = hasOwn.call(option, 'model') ? option.model : option.value;
        value = option.value;
        break;
      }
      ++i;
    }
    // B.2
    this.oldValue = this.currentValue;
    // B.3
    this.currentValue = value;
    // B.4
    return true;
  }

  private start(): void {
    const vm = CustomElement.for<MdcSelect>(this.obj).viewModel;
    vm.initialised.then(() => {
      (this.nodeObserver = new this.obj.ownerDocument.defaultView!.MutationObserver(records => this.handleNodeChange(records)))
        .observe(vm.menu.root, childObserverOptions);
      // this.observeArray(this.currentValue instanceof Array ? this.currentValue : null);
      this.observing = true;
      if (vm.items?.length) {
        this.optionsWereSet = true;
        this.synchronizeOptions();
      }
    });
  }

  private stop(): void {
    this.optionsWereSet = false;
    this.nodeObserver!.disconnect();
    this.arrayObserver?.unsubscribe(this);
    this.nodeObserver
      = this.arrayObserver
      = void 0;
    this.observing = false;
  }

  // todo: observe all kind of collection
  // private observeArray(array: unknown[] | null): void {
  //   this.arrayObserver?.unsubscribe(this);
  //   this.arrayObserver = void 0;
  //   if (array !== null) {
  //     if (!this.obj.multiple) {
  //       throw new Error('Only null or Array instances can be bound to a multi-select.');
  //     }
  //     (this.arrayObserver = this.observerLocator.getArrayObserver(array)).subscribe(this);
  //   }
  // }

  public handleNodeChange(records: MutationRecord[]): void {
    if (records.find(x => x.type === 'childList'
      && (Array.from(x.addedNodes).find(y => (y as HTMLElement).tagName === 'MDC-LIST-ITEM')
        || Array.from(x.removedNodes).find(y => (y as HTMLElement).tagName === 'MDC-LIST-ITEM'))
    )) {
      this.optionsWereSet = true;
      this.synchronizeOptions();
      const shouldNotify = this.synchronizeValue();
      if (shouldNotify) {
        this.notify();
      }
    }
  }

  public subscribe(subscriber: ISubscriber): void {
    if (this.subs.add(subscriber) && this.subs.count === 1) {
      for (const e of this.config.events) {
        this.obj.addEventListener(e, this);
      }
      this.listened = true;
      this.start();
    }
  }

  public unsubscribe(subscriber: ISubscriber): void {
    if (this.subs.remove(subscriber) && this.subs.count === 0) {
      for (const e of this.config.events) {
        this.obj.removeEventListener(e, this);
      }
      this.listened = false;
      this.stop();
    }
  }

  useConfig(config: INodeObserverConfigBase): void {
    this.config = config;
    if (this.listened) {
      for (const e of this.config.events) {
        this.obj.removeEventListener(e, this);
      }
      for (const e of this.config.events) {
        this.obj.addEventListener(e, this);
      }
    }
  }
}

subscriberCollection(MdcSelectValueObserver);
