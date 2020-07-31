import { autoinject, useView, PLATFORM } from 'aurelia-framework';
import { MdcDialog, MdcDialogService } from '@aurelia-mdc-web/dialog';

@autoinject
export class DialogExamples {
  constructor(private dialogService: MdcDialogService) { }

  async open() {
    alert(await this.dialogService.open({ viewModel: ServiceDialog, model: { caption: 'Select an account' } }));
  }

  handleClosing(evt: { detail: unknown }) {
    alert(JSON.stringify(evt.detail));
  }
}

@autoinject
@useView(PLATFORM.moduleName('views/dialog/service-dialog.html'))
export class ServiceDialog {
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
