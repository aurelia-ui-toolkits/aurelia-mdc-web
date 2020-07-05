import { PLATFORM, FrameworkConfiguration } from 'aurelia-framework';
import '@material/ripple/dist/mdc.ripple.css';

export { MdcRipple } from './mdc-ripple';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-ripple')
  ]);
}
