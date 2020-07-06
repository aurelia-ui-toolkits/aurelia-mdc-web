import { IComponentTemplate } from '../../elements/component-viewer/component-viewer';

export class List {
  template: IComponentTemplate = {
    title: 'Lists',
    description: 'Lists are continuous, vertical indexes of text or images.',
    references: [{
      name: 'Material Design guidelines: Lists',
      url: 'https://material.io/design/components/lists.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/README.md#sass-mixins' },
    ],
    code: `import {MdcListModule} from '@angular-mdc/web/list';`,
    sass: `@use '@material/list/mdc-list';
@use '@material/list';`
  };

}
