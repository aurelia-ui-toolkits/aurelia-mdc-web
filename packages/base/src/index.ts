import { IContainer } from 'aurelia';
import { MdcFocusTrap } from './attributes/mdc-focus-trap';
import { MdcPromisifyReference } from './elements/mdc-promisify-reference';

export { MdcComponent } from './mdc-component';
export { IValidatedElement, IError } from './elements/i-validated-element';
export { MATERIAL_PALETTE } from './material-palette';
export { boolean, booleanAttr, date, number, string } from './interceptors';
export { MdcFocusTrap } from './attributes/mdc-focus-trap';
export { nextElement } from './next-element';

let registered = false;

export const BaseConfiguration = {
  register(container: IContainer): IContainer {
    if (registered) {
      return container;
    } else {
      registered = true;
      return container.register(MdcPromisifyReference, MdcFocusTrap);
    }
  }
};
