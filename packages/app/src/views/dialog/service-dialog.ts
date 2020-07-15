import { useView, PLATFORM } from 'aurelia-framework';

@useView(PLATFORM.moduleName('views/dialog/service-dialog.html'))
export class ServiceDialog {
  params: unknown;

  activate(params: unknown) {
    this.params = params;
  }
}
