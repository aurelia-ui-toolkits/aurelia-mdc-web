import { inject } from 'aurelia';
import { MdcSnackbarService } from '@aurelia-mdc-web/all';

@inject(MdcSnackbarService)
export class Standard {
  constructor(private snackbarService: MdcSnackbarService) { }

  required: boolean;
  disabled: boolean;
  outlined: boolean;

  onSelectionChange(event: CustomEvent) {
    this.snackbarService.open(`onSelectionChange: ${JSON.stringify(event.detail)}`);
  }
}
