import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { MdcDefaultLookupConfiguration } from './mdc-lookup-configuration';

export { MdcLookup, IMdcLookupElement } from './mdc-lookup';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: MdcDefaultLookupConfiguration) => void) {
  frameworkConfig.globalResources([
    PLATFORM.moduleName('./mdc-lookup')
  ]);
  if (typeof callback === 'function') {
    const config = frameworkConfig.container.get(MdcDefaultLookupConfiguration);
    callback(config);
  }
}
