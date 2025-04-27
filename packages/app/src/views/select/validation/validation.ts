import { IValidationController } from '@aurelia/validation-html';
import { IValidationRules } from '@aurelia/validation';
import { newInstanceForScope, resolve } from '@aurelia/kernel';
import { MdcSnackbarService } from '@aurelia-mdc-web/all';

export class Validation {
  constructor(private validationController: IValidationController = resolve(newInstanceForScope(IValidationController)),
    private rules: IValidationRules = resolve(IValidationRules), private snackbarService: MdcSnackbarService = resolve(MdcSnackbarService)) {
    this.rules.on(Validation).ensure(x => x.validatedValue).required().then()
      .satisfies(x => x.id !== 1).withMessage('No cats')
      .satisfies(x => x.id !== 1).withMessage('please');

  }

  pets = [{ id: 1, name: 'Cat' }, { id: 2, name: 'Dog' }];
  validatedValue = this.pets[1];

  async validate() {
    const res = await this.validationController.validate();
    this.snackbarService.open(`valid: ${JSON.stringify(res.valid)}`);
  }
}
