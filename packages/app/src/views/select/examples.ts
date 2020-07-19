import { ValidationControllerFactory, ValidationRules, ValidationController, Rule } from 'aurelia-validation';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Examples {
  constructor(validationControllerFactory: ValidationControllerFactory) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Examples, any>(x => x.validatedValue).required().then()
      .satisfies(x => x.id !== 1).withMessage('nope')
      .satisfies(x => x.id !== 1).withMessage('multiline')
      .rules;
  }

  validationController: ValidationController;
  rules: Rule<Examples, unknown>[][];

  options = [{ id: 1, name: 'Cats' }, { id: 2, name: 'Dogs' }];
  value = this.options[1];
  validatedValue = this.options[1];

  attached() {
    this.validationController.addObject(this, this.rules);
  }

  addOption() {
    this.options.push({ id: 3, name: 'Fish' });
  }

  removeOption() {
    this.options.pop();
  }
}
