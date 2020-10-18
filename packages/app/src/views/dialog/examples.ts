import { MdcDialogService } from '@aurelia-mdc-web/dialog';
import { ServiceDialog } from './service-dialog';
import inlineHtml from '!!raw-loader!./inline.html';
import serviceHtml from '!!raw-loader!./service-dialog.html';
import serviceCode from '!!raw-loader!./service-dialog';
import { inject } from 'aurelia';

@inject()
export class Examples {
  constructor(private dialogService: MdcDialogService) { }

  inlineHtml = inlineHtml;
  serviceHtml = serviceHtml;
  serviceCode = serviceCode;

  async open() {
    alert(await this.dialogService.open({ viewModel: ServiceDialog, model: { caption: 'Select an account' } }));
  }

  handleClosing(evt: { detail: unknown }) {
    alert(JSON.stringify(evt.detail));
  }
}
