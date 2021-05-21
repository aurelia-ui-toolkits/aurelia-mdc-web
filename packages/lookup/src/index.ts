import { FrameworkConfiguration, PLATFORM, ViewResources } from 'aurelia-framework';
import { MdcDefaultLookupConfiguration } from './mdc-lookup-configuration';

export { MdcLookup, IMdcLookupElement } from './mdc-lookup';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: MdcDefaultLookupConfiguration) => void) {
  // make sure missing plugin does not crash the template compiler
  const resources = frameworkConfig.container.get(ViewResources);
  resources.getAttribute = (fn => function (attrName: string) {
    if (attrName === 'virtual-repeat' && !this.attributes['virtual-repeat']) {
      attrName = 'repeat';
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return fn.call(this, attrName);
  })(resources.getAttribute);

  frameworkConfig.globalResources([
    PLATFORM.moduleName('./mdc-lookup')
  ]);
  if (typeof callback === 'function') {
    const config = frameworkConfig.container.get(MdcDefaultLookupConfiguration);
    callback(config);
  }
}
