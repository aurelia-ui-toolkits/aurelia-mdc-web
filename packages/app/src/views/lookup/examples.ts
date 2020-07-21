import { ValidationControllerFactory, ValidationRules, ValidationController, Rule } from 'aurelia-validation';
import { inject } from 'aurelia-framework';

@inject(ValidationControllerFactory)
export class Examples {
  constructor(validationControllerFactory: ValidationControllerFactory) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Examples, any>(x => x.lookupValue).required()
      .rules;
  }

  validationController: ValidationController;
  rules: Rule<Examples, unknown>[][];

  public lookupOptions = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}${i === 5 ? ' loooooooooooooong' : ''}` }));
  public lookupValue = this.lookupOptions[1];

  attached() {
    this.validationController.addObject(this, this.rules);
  }

}
