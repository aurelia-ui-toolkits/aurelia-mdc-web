import { ValidationController, ValidationRules, ValidationControllerFactory, Rule } from 'aurelia-validation';
import { autoinject } from 'aurelia-framework';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

@autoinject
export class Validation {
  constructor(validationControllerFactory: ValidationControllerFactory, private snackbarService: MdcSnackbarService) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Validation, string>(x => x.valueStr).required()
      .satisfies(x => !x.startsWith('erro')).withMessage('cannot start with "erro"')
      .satisfies(x => !x.startsWith('error')).withMessage('cannot start with "error"')
      .rules;
  }

  validationController: ValidationController;
  rules: Rule<Validation, unknown>[][];

  valueStr: string = 'test';

  attached() {
    this.validationController.addObject(this, this.rules);
  }

  async validate() {
    const res = await this.validationController.validate();
    this.snackbarService.open(`valid: ${JSON.stringify(res.valid)}`);
  }
}
