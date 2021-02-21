import { IValidationController } from '@aurelia/validation-html';
import { IValidationRules } from '@aurelia/validation';
import { newInstanceForScope } from '@aurelia/kernel';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';

export class Validation {
  constructor(@newInstanceForScope(IValidationController) private validationController: IValidationController,
    @IValidationRules private rules: IValidationRules, private snackbarService: MdcSnackbarService) {
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
