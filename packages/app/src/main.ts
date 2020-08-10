// eslint-disable-next-line import/no-unassigned-import
import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia
    .use
    .developmentLogging()
    .standardConfiguration()
    .globalResources([
      PLATFORM.moduleName('attributes/highlight'),
      PLATFORM.moduleName('converters/json'),
      PLATFORM.moduleName('elements/example-viewer/example-viewer')
    ])
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/base'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/card'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/checkbox'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/chips'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/circular-progress'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/data-table'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/dialog'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/drawer'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/expandable'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/elevation'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/fab'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/form-field'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/lookup'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/menu-surface'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/top-app-bar'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/radio'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/select'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/slider'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/switch'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/tab-bar'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/text-field'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/tree-view'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/typography'))
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/validation'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('views/root/root'));
}
