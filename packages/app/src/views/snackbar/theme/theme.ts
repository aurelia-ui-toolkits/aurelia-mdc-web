import { MdcSnackbarService, ISnackbarOptions } from '@aurelia-mdc-web/snackbar';
import { inject } from 'aurelia';

@inject(MdcSnackbarService)
export class Theme {
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
