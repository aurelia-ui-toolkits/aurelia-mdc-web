import { ValidationController, ValidationRules, ValidationControllerFactory, Rule } from "aurelia-validation";
import { autoinject } from 'aurelia-framework';
import { MdcTextField } from '@aurelia-mdc-web/text-field';

@autoinject
export class Examples {
  constructor(validationControllerFactory: ValidationControllerFactory) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Examples, string>(x => x.valueStr).required()
      .satisfies(x => !x.startsWith('erro')).withMessage('cannot start with "erro"')
      .satisfies(x => !x.startsWith('error')).withMessage('cannot start with "error"')
      .rules;
  }

  validationController: ValidationController;
  rules: Rule<Examples, unknown>[][];

  value = 0;
  valueStr: string = 'test';

  textareaDisabled: boolean;
  textareaRequired: boolean;

  attached() {
    this.validationController.addObject(this, this.rules);
  }

  async validate() {
    const res = await this.validationController.validate();
    console.log(res);
  }

  toggleTextareaDisabled() {
    this.textareaDisabled = !this.textareaDisabled;
  }

  toggleTextareaRequired() {
    this.textareaRequired = !this.textareaRequired;
  }

  alternateColors(input: HTMLElement) {
    if (input.hasAttribute('textarea')) {
      const demoTextarea = 'demo-textarea';
      input.classList.toggle(demoTextarea);
    } else {
      const demoFullwidth = 'demo-fullwidth-input';
      input.classList.toggle(demoFullwidth);
    }
  }

}
