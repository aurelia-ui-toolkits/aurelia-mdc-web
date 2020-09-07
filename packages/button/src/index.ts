import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { MdcButton } from './mdc-button';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./mdc-button'),
    PLATFORM.moduleName('./enhance-mdc-button'),
    PLATFORM.moduleName('./mdc-button-label')
  ]);

  config.aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'));
}
