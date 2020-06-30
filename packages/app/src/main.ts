import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia
    .use
    .developmentLogging()
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@aurelia-material-components-web/textfield'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
