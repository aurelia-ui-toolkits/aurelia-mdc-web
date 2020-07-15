import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia
    .use
    .developmentLogging()
    .standardConfiguration()
    .globalResources([
      'attributes/highlight',
    ])
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/card'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/checkbox'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/circular-progress'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/dialog'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/drawer'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/floating-label'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/form-field'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/line-ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu-surface'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/notched-outline'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/top-app-bar'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/radio'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/select'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/tab-bar'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/text-field'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/typography'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('views/root/root'));
}
