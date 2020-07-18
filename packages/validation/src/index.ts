import { ValidationControllerFactory } from 'aurelia-validation';
import { MdcValidationControllerFactory } from './mdc-validation-controller-factory';

export { MdcValidationRenderer } from './mdc-validation-renderer';
export { MdcValidationControllerFactory } from './mdc-validation-controller-factory';

export function configure() {
  // replace default static get with ours
  ValidationControllerFactory.get = MdcValidationControllerFactory.get;
}
