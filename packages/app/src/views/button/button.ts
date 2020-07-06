import { IComponentTemplate } from '../../elements/component-viewer/component-viewer';

export class Button {
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
