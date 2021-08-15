// eslint-disable-next-line import/no-unassigned-import
import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { MdcDefaultTooltipConfiguration } from '@aurelia-mdc-web/tooltip';
import { MdcDefaultTextFieldConfiguration } from '@aurelia-mdc-web/text-field';
import { MdcDefaultSelectConfiguration } from '@aurelia-mdc-web/select';

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
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/tooltip'), (config: MdcDefaultTooltipConfiguration) => {
      config.scrollHost = '.demo-panel-content';
    })
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/text-field'), (config: MdcDefaultTextFieldConfiguration) => {
      config.outlined = false;
    })
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/select'), (config: MdcDefaultSelectConfiguration) => {
      config.outlined = false;
    })
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/all'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('views/root/root'));
}
