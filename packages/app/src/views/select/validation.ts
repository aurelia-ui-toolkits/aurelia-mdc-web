import { ValidationControllerFactory, ValidationRules, ValidationController, Rule } from 'aurelia-validation';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Validation {
  constructor(validationControllerFactory: ValidationControllerFactory) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Validation, unknown>(x => x.validatedValue).required().withMessage('Required').then()
      // demo multiline validation
      .satisfies(x => x.id !== 1).withMessage('No cats')
      .satisfies(x => x.id !== 1).withMessage('please')
      .rules;
  }

  validationController: ValidationController;
  rules: Rule<Validation, unknown>[][];

  pets = [{ id: 1, name: 'Cat' }, { id: 2, name: 'Dog' }];
  validatedValue = this.pets[1];

  attached() {
    this.validationController.addObject(this, this.rules);
  }
}
