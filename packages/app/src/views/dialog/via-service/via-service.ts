import { inject } from 'aurelia';
import { MdcDialogService } from '@aurelia-mdc-web/all';
import { DialogContent } from './dialog-content';

@inject(MdcDialogService)
export class ViaService {
  constructor(private dialogService: MdcDialogService) { }

  async open() {
    alert(await this.dialogService.open({ viewModel: DialogContent, model: { caption: 'Select an account' } }));
    // alert(await this.dialogService.open());
  }

  handleClosing(evt: { detail: unknown }) {
    alert(JSON.stringify(evt.detail));
  }
}
