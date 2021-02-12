import { IContainer } from 'aurelia';
import { MdcFormField } from './mdc-form-field';

export { MdcFormField } from './mdc-form-field';

export const FormFieldConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcFormField);
  }
};
