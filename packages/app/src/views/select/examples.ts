import { ValidationControllerFactory, ValidationRules, ValidationController, Rule } from 'aurelia-validation';
import { autoinject } from 'aurelia-framework';
import { MdcSnackbarService } from '@aurelia-mdc-web/snackbar';
import customHtml from '!!raw-loader!./custom.html';
import customSass from '!!raw-loader!./custom.scss';
import customCode from '!!raw-loader!./custom';
import leadingIconHtml from '!!raw-loader!./leading-icon.html';
import noLabelHtml from '!!raw-loader!./no-label.html';
import objectsBindingHtml from '!!raw-loader!./objects-binding.html';
import objectsBindingCode from '!!raw-loader!./objects-binding';
import selectHtml from '!!raw-loader!./select.html';
import validationHtml from '!!raw-loader!./validation.html';
import validationCode from '!!raw-loader!./validation';

@autoinject
export class Examples {
  constructor(validationControllerFactory: ValidationControllerFactory, private snackbarService: MdcSnackbarService) {
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.rules = ValidationRules
      .ensure<Examples, unknown>(x => x.validatedValue).required().withMessage('Required').then()
      // demo multiline validation
      .satisfies(x => x.id !== 1).withMessage('No cats')
      .satisfies(x => x.id !== 1).withMessage('please')
      .rules;
  }

  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  leadingIconHtml = leadingIconHtml;
  noLabelHtml = noLabelHtml;
  objectsBindingHtml = objectsBindingHtml;
  objectsBindingCode = objectsBindingCode;
  selectHtml = selectHtml;
  validationHtml = validationHtml;
  validationCode = validationCode;

  validationController: ValidationController;
  rules: Rule<Examples, unknown>[][];

  pets = [{ id: 1, name: 'Cat' }, { id: 2, name: 'Dog' }];
  value = undefined;
  validatedValue = undefined;

  foods = [
    { value: undefined, disabled: false },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos is disabled', disabled: true },
    { value: 'fruit-3', viewValue: 'Fruit' },
  ];

  attached() {
    this.validationController.addObject(this, this.rules);
  }

  addOption() {
    this.pets.push({ id: 3, name: 'Fish' });
  }

  removeOption() {
    this.pets.pop();
  }

  onSelectionChange(event: CustomEvent) {
    this.snackbarService.open(`onSelectionChange: ${JSON.stringify(event.detail)}`);
  }

}
