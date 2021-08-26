import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcBanner } from './mdc-banner';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-banner')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'));
}
