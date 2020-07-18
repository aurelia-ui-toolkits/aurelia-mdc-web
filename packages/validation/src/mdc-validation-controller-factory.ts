import { ValidationControllerFactory, Validator, ValidationController } from 'aurelia-validation';
import { Container } from 'aurelia-framework';
import { MdcValidationRenderer } from './mdc-validation-renderer';

export class MdcValidationControllerFactory extends ValidationControllerFactory {
	static get(container: Container) {
    console.log(ValidationControllerFactory);
		return new MdcValidationControllerFactory(container);
	}

	constructor(container: Container) {
		super(container);
	}

	createForCurrentScope(validator?: Validator): ValidationController {
		let controller = super.createForCurrentScope(validator);
		controller.addRenderer(new MdcValidationRenderer());
		// controller.validateTrigger = validateTrigger.changeOrBlur;
		return controller;
	}
}

// this tells DI to call static get method to resolve dependency
(MdcValidationControllerFactory as any)["protocol:aurelia:resolver"] = true;
