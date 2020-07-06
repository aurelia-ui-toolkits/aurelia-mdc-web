import { IComponentTemplate } from '../../elements/component-viewer/component-viewer';

export class TextField {
  template: IComponentTemplate = {
    title: 'Text Field',
    description: 'Text fields let users enter and edit text.',
    references: [{
      name: 'Material Design guidelines: Text Fields',
      url: 'https://material.io/design/components/text-fields.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/README.md#sass-mixins' },
      { name: 'Character Counter Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/character-counter/README.md#sass-mixins' },
      { name: 'Helper Text Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/helper-text/README.md#sass-mixins' },
      { name: 'Icon Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-textfield/icon/README.md#sass-mixins' },
    ],
    code: `import {MdcTextFieldModule} from '@angular-mdc/web/textfield';`,
    sass: `@use '@material/textfield/mdc-text-field';
@use '@material/textfield/_index' as textfield;
@use '@material/form-field/_index' as form-field;`
  };

}
