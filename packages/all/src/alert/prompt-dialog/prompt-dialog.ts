import { MdcDialog } from '@aurelia-mdc-web/all';
import template from './prompt-dialog.html?raw'
import { customElement, inject, newInstanceForScope } from 'aurelia';
import { IValidationController } from '@aurelia/validation-html';
import { IValidationRules } from '@aurelia/validation';

export interface IPromptDialogData {
  title: string;
  label: string;
  text: string;
  required: boolean;
  textarea: boolean;
  okText: string;
  cancelText: string;
}

@inject(newInstanceForScope(IValidationController), IValidationRules)
@customElement({ name: 'prompt-dialog', template })
export class PromptDialog {
  constructor(private validationController: IValidationController, private rules: IValidationRules) { }

  dialog: MdcDialog;
  data: IPromptDialogData;

  loading(data: IPromptDialogData) {
    this.data = data;
    this.rules.on(data).ensure(x => x.text).required().when(x => !!x?.required);
  }

  async ok() {
    if ((await this.validationController.validate()).valid) {
      this.dialog.close('ok');
    }
  }
}
