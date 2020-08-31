import { ValidationControllerFactory, ValidationRules, ValidationController, Rule } from 'aurelia-validation';
import { inject } from 'aurelia-framework';
import basicHtml from '!!raw-loader!./basic.html';
import basicCode from '!!raw-loader!./basic';
import functionHtml from '!!raw-loader!./function.html';
import functionCode from '!!raw-loader!./function';
import objectsHtml from '!!raw-loader!./objects.html';
import objectsCode from '!!raw-loader!./objects';
import validationHtml from '!!raw-loader!./validation.html';
import validationCode from '!!raw-loader!./validation';

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

  basicHtml = basicHtml;
  basicCode = basicCode;
  functionHtml = functionHtml;
  functionCode = functionCode;
  objectsHtml = objectsHtml;
  objectsCode = objectsCode;
  validationHtml = validationHtml;
  validationCode = validationCode;

  validationController: ValidationController;
  rules: Rule<Examples, IOption>[][];

  basicOptions = Array.from({ length: 20 }, (x, i) => (`option ${i}`));

  options: IOption[] = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}` }));
  validationValue = this.options[1];

  attached() {
    this.validationController.addObject(this, this.rules);
  }

  getOptions = async (filter: string, value: unknown): Promise<unknown[]> => {
    if (value) {
      return Promise.resolve([this.options.find(x => x === value)]);
    } else {
      return Promise.resolve(this.options.filter(x => x.name.toUpperCase().includes((filter || '').toUpperCase())));
    }
  };

}
