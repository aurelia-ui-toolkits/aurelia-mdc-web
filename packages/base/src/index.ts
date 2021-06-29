import { IContainer } from 'aurelia';
import { MdcPromisifyReference } from './elements/mdc-promisify-reference';

export { MdcComponent } from './mdc-component';
export { IValidatedElement, IError } from './elements/i-validated-element';
export { MATERIAL_PALETTE } from './material-palette';
export { boolean, booleanAttr, date, number, string } from './interceptors';
export { defaultSlotProcessContent } from './default-slot-process-content';

export const BaseConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcPromisifyReference);
  }
};
