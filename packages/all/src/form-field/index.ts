import { IContainer } from 'aurelia';
import { MdcFormField } from './mdc-form-field';

export { MdcFormField } from './mdc-form-field';

let registered = false;

export const FormFieldConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcFormField);
    }
  }
};
