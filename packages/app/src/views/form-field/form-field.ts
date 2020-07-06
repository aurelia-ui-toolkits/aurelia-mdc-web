import { IComponentTemplate } from '../../elements/component-viewer/component-viewer';

export class FormField {
  template: IComponentTemplate = {
    title: 'Form Fields',
    description: `MDC Form Field aligns an MDC Web form field (for example, a checkbox)
    with its label and makes it RTL-aware. It also activates a ripple effect
    upon interacting with the label.`,
    references: [{
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/README.md'
    }],
    code: `import {MdcFormFieldModule} from '@angular-mdc/web/form-field';`,
    sass: `@use '@material/form-field/mdc-form-field';
@use '@material/form-field/_index' as form-field;`,
    tabs: [{
      label: 'Api',
      route: './api'
    }, {
      label: 'Examples',
      route: './examples'
    }]
  };

}
