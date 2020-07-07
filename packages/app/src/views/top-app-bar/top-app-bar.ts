import { useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { ComponentViewer, IComponentTemplate } from '../component-viewer/component-viewer';
import { Router } from 'aurelia-router';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class TopAppBar extends ComponentViewer {
  template: IComponentTemplate = {
    title: 'Top App Bar',
    description: 'The top app bar displays information and actions relating to the current screen.',
    references: [{
      name: 'Material Design guidelines: App bars: top',
      url: 'https://material.io/design/components/app-bars-top.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-top-app-bar/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-top-app-bar/README.md#sass-mixins' },
    ],
    code: `import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';`,
    sass: `@use '@material/top-app-bar/mdc-top-app-bar';
@use '@material/top-app-bar';
@use '@material/icon-button/mdc-icon-button';`
  };

}
