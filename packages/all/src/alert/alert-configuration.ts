import { AlertModal } from './alert-modal/alert-modal';
import { PromptDialog } from './prompt-dialog/prompt-dialog';

export class MdcAlertConfiguration {
  defaultAlertModal: new (...args: any[]) => any = AlertModal;
  defaultPromptDialog: new (...args: any[]) => any = PromptDialog;
  okText: string = 'Ok';
  cancelText: string = 'Cancel';
  yesText: string = 'Yes';
  noText: string = 'No';
}
