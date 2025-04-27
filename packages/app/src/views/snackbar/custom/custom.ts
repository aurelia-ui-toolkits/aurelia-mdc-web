import { MdcSnackbarService, ISnackbarOptions } from '@aurelia-mdc-web/all';
import { inject } from 'aurelia';

@inject(MdcSnackbarService)
export class Custom {
  constructor(private snackbar: MdcSnackbarService) { }

  async openCustom(customClasses: ISnackbarOptions) {
    await this.snackbar.open('Can\'t send photo. Retry in 5 seconds.', 'Retry', {
      dismissible: true,
      classes: customClasses.classes,
      actionClasses: customClasses.actionClasses,
      dismissClasses: customClasses.dismissClasses
    });
  }

}
