import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcFab } from './mdc-fab';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-fab'),
    PLATFORM.moduleName('./enhance-mdc-fab')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}
