import { MdcDialog } from '@aurelia-mdc-web/dialog';
import { inject } from 'aurelia';

@inject(MdcDialog)
export class DialogContent {
  params: unknown;
  dialog: MdcDialog;

  loading(params: unknown) {
    this.params = params;
  }

  ok() {
    this.dialog.close('ok');
  }
}
