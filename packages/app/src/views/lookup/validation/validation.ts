import { IValidationController } from '@aurelia/validation-html';
import { IValidationRules } from '@aurelia/validation';
import { newInstanceForScope, resolve } from '@aurelia/kernel';

interface IOption {
  id: number;
  name: string;
}

export class Validation {
  constructor(private controller: IValidationController = resolve(newInstanceForScope(IValidationController)),
    private rules: IValidationRules = resolve(IValidationRules)) {
    this.rules.on(Validation).ensure(x => x.value).required();
  }

  options: IOption[] = Array.from({ length: 20 }, (x, i) => ({ id: i, name: `option ${i}` }));
  value = this.options[1];

  validate() {
    this.controller.validate();
  }
}
