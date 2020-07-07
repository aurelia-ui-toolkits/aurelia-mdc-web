import { Router, RouterConfiguration } from 'aurelia-router';
import { ComponentViewer, IComponentTemplate } from '../component-viewer/component-viewer';
import { useView, PLATFORM, autoinject } from 'aurelia-framework';

@autoinject
@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class Button extends ComponentViewer {
  template: IComponentTemplate = {
    title: 'Button',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.',
    references: [{
      name: 'Material Design guidelines: Buttons',
      url: 'https://material.io/design/components/buttons.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/README.md#sass-mixins' },
    ],
    code: `import {MdcButtonModule} from '@angular-mdc/web/button';`,
    sass: `@use '@material/button/mdc-button';`
  };
}
