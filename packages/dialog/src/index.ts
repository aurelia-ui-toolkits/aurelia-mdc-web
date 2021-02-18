import { IContainer } from 'aurelia';
import { MdcDialog } from './mdc-dialog';
import { MdcDialogActions } from './mdc-dialog-actions';
import { MdcDialogTitle } from './mdc-dialog-title';
import { MdcDialogContent } from './mdc-dialog-content';

export { MdcDialog } from './mdc-dialog';
export { MdcDialogService, IMdcDialogOptions } from './mdc-dialog-service';

export const DialogConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcDialog, MdcDialogActions, MdcDialogTitle, MdcDialogContent);
  }
};
