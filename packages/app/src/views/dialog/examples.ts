import { autoinject } from 'aurelia-framework';
import { MdcDialogService } from "@aurelia-mdc-web/dialog";
import { ServiceDialog } from './service-dialog';

@autoinject
export class Examples {
  constructor(private dialogService: MdcDialogService) { }

  async open() {
    console.log(await this.dialogService.open({ viewModel: ServiceDialog, model: { field: 'field' } }));
  }
}
