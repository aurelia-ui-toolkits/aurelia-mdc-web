import { IComponentTemplate } from '../../elements/component-viewer/component-viewer';

export class Ripple {
  template: IComponentTemplate = {
    title: 'Ripple',
    description: 'Ripple provides components (or any element) with a material "ink ripple" interaction effect.',
    references: [{
      name: 'Material Design guidelines: Ripple',
      url: 'https://material.io/design/interaction/states.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md#sass-apis' },
    ],
    code: `import {MdcRippleModule} from '@angular-mdc/web/ripple';`,
    sass: `@use '@material/ripple/mdc-ripple';
@use '@material/ripple';`
  };

}
