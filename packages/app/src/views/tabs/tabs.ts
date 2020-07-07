import { useView } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { ComponentViewer, IComponentTemplate } from '../component-viewer/component-viewer';
import { Router } from 'aurelia-router';

@useView(PLATFORM.moduleName('../component-viewer/component-viewer.html'))
export class Tabs extends ComponentViewer {
  template: IComponentTemplate = {
    title: 'Tabs',
    description: 'Tabs organize content across different screens, data sets, and other interactions.',
    references: [{
      name: 'Material Design guidelines: Tabs',
      url: 'https://material.io/design/components/tabs.html'
    }, {
      name: 'Material Components Web: Tab Bar',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md'
    }, {
      name: 'Material Components Web: Tab Scroller',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md'
    }, {
      name: 'Material Components Web: Tab',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md'
    }, {
      name: 'Material Components Web: Tab Indicator',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md'
    }],
    mdcUrls: [
      {name: 'Tab Bar Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md#sass-mixins'},
      {name: 'Scroller Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md#sass-mixins'},
      {name: 'Tab Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md#sass-mixins'},
      {name: 'Indicator Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md#sass-mixins'},
    ],
    code: `import {MdcTabBarModule} from '@angular-mdc/web/tab-bar';`,
    sass: `@use '@material/tab-bar/mdc-tab-bar';
@use '@material/tab-bar';
@use '@material/tab-scroller/mdc-tab-scroller';
@use '@material/tab-scroller';
@use '@material/tab-indicator/mdc-tab-indicator';
@use '@material/tab-indicator';
@use '@material/tab/mdc-tab';
@use '@material/tab';`
  };

}
