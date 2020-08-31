import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcComponent } from './mdc-component';
export { MdcComponentAdapters } from './mdc-component-adapters';
export { Size } from './attributes/mdc-size-attribute';
export { IValidatedElement } from './elements/i-validated-element';
export { MATERIAL_PALETTE } from './material-palette';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./attributes/mdc-size-attribute')
  ]);
}
