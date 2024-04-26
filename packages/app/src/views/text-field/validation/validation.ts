import { IValidationController } from '@aurelia/validation-html';
import { IValidationRules } from '@aurelia/validation';
import { newInstanceForScope, resolve } from '@aurelia/kernel';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

export class Validation {
  constructor(
    private validationController: IValidationController = resolve(newInstanceForScope(IValidationController)),
    private rules: IValidationRules = resolve(IValidationRules),
    private snackbarService: MdcSnackbarService = resolve(MdcSnackbarService)
  ) {
    this.rules.on(Validation).ensure(x => x.valueStr).required()
      .satisfies(x => !x.startsWith('erro')).withMessage('cannot start with "erro"')
      .satisfies(x => !x.startsWith('error')).withMessage('cannot start with "error"');
  }

  valueStr: string = 'test';

  async validate() {
    const res = await this.validationController.validate();
    this.snackbarService.open(`valid: ${JSON.stringify(res.valid)}`);
  }
}
