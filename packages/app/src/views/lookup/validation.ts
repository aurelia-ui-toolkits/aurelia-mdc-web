import { ValidationControllerFactory, ValidationRules, ValidationController, Rule } from 'aurelia-validation';
import { inject } from 'aurelia-framework';

interface IOption {
  id: number;
  name: string;
}

@inject(ValidationControllerFactory)
export class Examples {
  constructor(validationControllerFactory: ValidationControllerFactory) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Examples, IOption>(x => x.validationValue).required()
      .rules;
  }

  validationController: ValidationController;
  rules: Rule<Examples, IOption>[][];

  options: IOption[] = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}` }));
  validationValue = this.options[1];

  attached() {
    this.validationController.addObject(this, this.rules);
  }
}
