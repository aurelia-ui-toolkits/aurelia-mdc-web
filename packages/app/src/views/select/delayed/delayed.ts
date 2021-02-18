import { inject } from 'aurelia';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

@inject(MdcSnackbarService)
export class Delayed {
  constructor(private snackbarService: MdcSnackbarService) { }

  delayedItems: string[];
  delayedItem = 'item2';

  attached() {
    new Promise<string[]>(r => setTimeout(() => r(['item1', 'item2', 'item3']), 10000))
      .then(x => this.delayedItems = x);
  }

  onSelectionChange(event: CustomEvent) {
    this.snackbarService.open(`onSelectionChange: ${JSON.stringify(event.detail)}`);
  }
}
