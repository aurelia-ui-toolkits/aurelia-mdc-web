import {
  CollectionKind,
  LifecycleFlags as LF,
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

import { INode, EventSubscriber, CustomElement } from '@aurelia/runtime-html';
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

export class MdcSelectValueObserver implements IObserver {
  public currentValue: unknown = void 0;
  public oldValue: unknown = void 0;

  public readonly obj: IMdcSelectElement;

  public hasChanges: boolean = false;
  // ObserverType.Layout is not always true
  // but for simplicity, always treat as such
  public type: AccessorType = AccessorType.Node | AccessorType.Observer | AccessorType.Layout;

  public arrayObserver?: ICollectionObserver<CollectionKind.array> = void 0;
  public nodeObserver?: MutationObserver = void 0;

  private observing: boolean = false;

  public constructor(
    obj: INode,
    // deepscan-disable-next-line
    _key: PropertyKey,
    public readonly handler: EventSubscriber,
    public readonly observerLocator: IObserverLocator,
  ) {
    this.obj = obj as unknown as IMdcSelectElement;
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

  public setValue(newValue: unknown, flags: LF): void {
    this.currentValue = newValue;
    this.hasChanges = newValue !== this.oldValue;
    // this.observeArray(newValue instanceof Array ? newValue : null);
    if ((flags & LF.noFlush) === 0 && this.optionsWereSet) {
      this.flushChanges(flags);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public flushChanges(_flags: LF): void {
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

  public notify(flags: LF): void {
    if ((flags & LF.fromBind) > 0) {
      return;
    }
    const oldValue = this.oldValue;
    const newValue = this.currentValue;
    if (newValue === oldValue) {
      return;
    }
    this.subs.notify(newValue, oldValue, flags);
  }

  public handleEvent(): void {
    const shouldNotify = this.synchronizeValue();
    if (shouldNotify) {
      this.subs.notify(this.currentValue, this.oldValue, LF.none);
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
        this.notify(LF.none);
      }
    }
  }

  public subscribe(subscriber: ISubscriber): void {
    if (this.subs.add(subscriber) && this.subs.count === 1) {
      this.handler.subscribe(this.obj, this);
      this.start();
    }
  }

  public unsubscribe(subscriber: ISubscriber): void {
    if (this.subs.remove(subscriber) && this.subs.count === 0) {
      this.handler.dispose();
      this.stop();
    }
  }
}

subscriberCollection(MdcSelectValueObserver);
