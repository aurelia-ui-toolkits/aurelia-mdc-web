import { ValidationControllerFactory, Validator, ValidationController } from 'aurelia-validation';
import { Container } from 'aurelia-framework';
import { MdcValidationRenderer } from './mdc-validation-renderer';

export class MdcValidationControllerFactory extends ValidationControllerFactory {
  // this tells DI to call static get method to resolve dependency
  static 'protocol:aurelia:resolver' = true;

  static get(container: Container) {
    return new MdcValidationControllerFactory(container);
  }

  createForCurrentScope(validator?: Validator): ValidationController {
    const controller = super.createForCurrentScope(validator);
    controller.addRenderer(new MdcValidationRenderer());
    // controller.validateTrigger = validateTrigger.changeOrBlur;
    return controller;
  }
}
