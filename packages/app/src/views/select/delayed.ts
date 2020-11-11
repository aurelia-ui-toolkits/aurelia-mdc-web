import { autoinject } from 'aurelia-framework';

@autoinject
export class ObjectsBinding {
  delayedItems: string[];
  delayedItem = 'item2';

  activate() {
    new Promise<string[]>(r => setTimeout(() => r(['item1', 'item2', 'item3']), 10000))
      .then(x => this.delayedItems = x);
  }
}
