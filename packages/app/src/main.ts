// eslint-disable-next-line import/no-unassigned-import
import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia
    .use
    .developmentLogging()
    .standardConfiguration()
    .globalResources([
      PLATFORM.moduleName('converters/json'),
      PLATFORM.moduleName('elements/example-viewer/example-viewer'),
      PLATFORM.moduleName('elements/hljs/hljs')
    ])
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/all'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('views/root/root'));
}
