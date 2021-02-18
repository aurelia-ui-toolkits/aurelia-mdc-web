import { MdcDialog } from '@aurelia-mdc-web/dialog';
import { inject } from 'aurelia';

@inject(MdcDialog)
export class DialogContent {
  // current dialog instance can be injected into the dialog view model
  // which allows for manipulating it in code
  constructor(private dialog: MdcDialog) { }

  params: unknown;

  activate(params: unknown) {
    this.params = params;
  }

  ok() {
    this.dialog.close('ok');
  }
}
