import { ComponentViewer, IComponentTemplate } from '../component-viewer/component-viewer';
import { Router } from 'aurelia-router';
import { useView, PLATFORM } from 'aurelia-framework';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class Drawer extends ComponentViewer {
  template: IComponentTemplate = {
    title: 'Drawers',
    description: 'The MDC Navigation Drawer is used to organize access to destinations and other functionality on an app.',
    references: [{
      name: 'Material Design guidelines: Navigation Drawer',
      url: 'https://material.io/design/components/navigation-drawer.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/README.md'
    }],
    mdcUrls: [
      {name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/README.md#sass-mixins'},
    ],
    code: `aurelia.use.plugin(PLATFORM.moduleName('@aurelia-mdc-web/drawer'));`,
    sass: '@use "@material/drawer/mdc-drawer";'
  };

}