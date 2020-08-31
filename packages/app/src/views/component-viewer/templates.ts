interface IReference {
  name: string;
  url: string;
}

export interface IComponentTemplate {
  title?: string;
  description?: string;
  references?: IReference[];
  code?: string;
  sass?: string;
  mdcUrls?: IReference[];
}

export const templates: { [x: string]: IComponentTemplate } = {
  'button': {
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
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/button\'));',
    sass: '@use \'@material/button/mdc-button\';'
  },
  'card': {
    title: 'Card',
    description: 'Cards contain content and actions about a single subject.',
    references: [{
      name: 'Material Design guidelines: Cards',
      url: 'https://material.io/design/components/cards.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-card/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-card/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/card\'));',
    sass: `@use '@material/card/mdc-card';
@use '@material/card';`
  },
  'checkbox': {
    title: 'Checkbox',
    description: 'Checkboxes allow the user to select one or more items from a set.',
    references: [{
      name: 'Material Design guidelines: Checkbox',
      url: 'https://material.io/design/components/selection-controls.html#checkboxes'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-checkbox/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-checkbox/README.md#style-customization' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/checkbox\'));',
    sass: `@use '@material/checkbox/mdc-checkbox';
@use '@material/checkbox';`
  },
  'chips': {
    title: 'Chips',
    description: 'Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action.',
    references: [{
      name: 'Material Design guidelines: Chips',
      url: 'https://material.io/guidelines/components/chips.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-chips/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-chips/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/chips\'));',
    sass: `@use '@material/chips/mdc-chips';
@use '@aurelia-mdc-web/chips';
`
  },
  'circular-progress': {
    title: 'Circular Progress',
    description: 'Progress indicators express an unspecified wait time or display the length of a process.',
    references: [{
      name: 'Material Design guidelines: Progress Activity',
      url: 'https://material.io/components/progress-indicators/'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-circular-progress/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-circular-progress/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/circular-progress\'));',
    sass: `@use '@material/circular-progress/mdc-circular-progress';
@use '@material/circular-progress';
@use "@aurelia-mdc-web/circular-progress";`
  },
  'data-table': {
    title: 'Data Table',
    description: `Data tables display information in a grid-like format of rows and columns.
    They organize information in a way that's easy to scan, so that users can look for patterns and insights.`,
    references: [{
      name: 'Material Design guidelines: Data Tables',
      url: 'https://material.io/design/components/data-tables.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-data-table/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-data-table/README.md#sass-mixins' },
    ],
    code: 'import {MDCDataTableModule} from \'@angular-mdc/web/data-table\';',
    sass: `@use '@material/data-table/mdc-data-table';
@use '@material/data-table';`
  },
  'dialog': {
    title: 'Dialog',
    description: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.',
    references: [{
      name: 'Material Design guidelines: Dialog',
      url: 'https://material.io/guidelines/components/dialogs.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-dialog/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-dialog/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/dialog\'));',
    sass: `@use '@material/dialog/mdc-dialog';
@use '@material/dialog';`
  },
  'drawer': {
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
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/drawer\'));',
    sass: '@use "@material/drawer/mdc-drawer";'
  },
  'expandable': {
    title: 'Expandable',
    description: 'Expandable provides an expandable details-summary view.',
    references: [],
    mdcUrls: [],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/expandable\'));',
    sass: '@use "@aurelia-mdc-web/expandable";'
  },
  'elevation': {
    title: 'Elevation',
    description: `Shadows provide important visual cues about objects’ depth and directional movement.
    They are the only visual cue indicating the amount of separation between surfaces.
     An object’s elevation determines the appearance of its shadow.`,
    references: [{
      name: 'Material Design guidelines: Elevation',
      url: 'https://material.io/design/environment/elevation.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/README.md#style-customization' },
    ],
    code: 'import {MdcElevationModule} from \'@angular-mdc/web/elevation\';',
    sass: '@use \'@material/elevation/mdc-elevation\';'
  },
  'fab': {
    title: 'Floating Action Button',
    description: 'A floating action button represents the primary action in an application.',
    references: [{
      name: 'Material Design guidelines: Floating Action Button',
      url: 'https://material.io/design/components/buttons-floating-action-button.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/fab\'));',
    sass: `@use '@material/fab/mdc-fab';
@use '@material/fab';`
  },
  'form-field': {
    title: 'Form Fields',
    description: `MDC Form Field aligns an MDC Web form field (for example, a checkbox)
    with its label and makes it RTL-aware. It also activates a ripple effect
    upon interacting with the label.`,
    references: [{
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/README.md'
    }],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/form-field\'));',
    sass: `@use '@material/form-field/mdc-form-field';
@use '@material/form-field/_index' as form-field;`
  },
  'icon-button': {
    title: 'Icon Buttons',
    description: 'Icon buttons allow users to take actions, and make choices, with a single tap.',
    references: [{
      name: 'Material Design guidelines: Toggle Buttons',
      url: 'https://material.io/design/components/buttons.html#toggle-button'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-icon-button/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-icon-button/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/icon-button\'));',
    sass: `@use '@material/icon-button/mdc-icon-button';
@use '@material/icon-button/_index' as icon-button;`
  },
  'image-list': {
    title: 'Image List',
    description: 'MDC Image List provides a RTL-aware Material Design image list component. An Image List consists of several items, each containing an image and optionally supporting content (i.e. a text label).',
    references: [{
      name: 'Material Design guidelines: Image Lists',
      url: 'https://material.io/design/components/image-lists.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-image-list/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-image-list/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/image-list\'))',
    sass: `@use '@material/image-list/mdc-image-list';
@use '@material/image-list';
@use '@aurelia-mdc-web/image-list';`
  },
  'layout-grid': {
    title: 'Layout Grids',
    description: 'Material design’s responsive UI is based on a column-variate grid layout.',
    references: [{
      name: 'Material Design guidelines: Layout Grid',
      url: 'https://material.io/design/layout/responsive-layout-grid'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-layout-grid/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-layout-grid/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/layout-grid\'));',
    sass: `@use "@material/layout-grid/mdc-layout-grid";
@use "@aurelia-mdc-web/layout-grid";`
  },
  'list': {
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
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/list\'));',
    sass: `@use '@material/list/mdc-list';
@use '@material/list';`
  },
  'linear-progress': {
    title: 'Linear Progress',
    description: 'Progress indicators express an unspecified wait time or display the length of a process.',
    references: [{
      name: 'Material Design guidelines: Progress Activity',
      url: 'https://material.io/components/progress-indicators/'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/linear-progress\'));',
    sass: `@use '@material/linear-progress/mdc-linear-progress';
@use '@material/linear-progress';`
  },
  'lookup': {
    title: 'Lookup',
    description: 'The lookup is a normal text input enhanced by a panel of suggested options.',
    references: [{
      name: 'Material Design guidelines: Menus',
      url: 'https://material.io/design/components/menus.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/lookup\'));',
    sass: `@use '@material/menu/mdc-menu';
@use '@material/menu';
@use '@material/list/mdc-list';
@use '@material/menu-surface/mdc-menu-surface';`
  },
  'menu': {
    title: 'Menus',
    description: 'A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.',
    references: [{
      name: 'Material Design guidelines: Menus',
      url: 'https://material.io/design/components/menus.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/menu\'));',
    sass: `@use '@material/menu/mdc-menu';
@use '@material/menu';
@use '@material/list/mdc-list';
@use '@material/menu-surface/mdc-menu-surface';`
  },
  'menu-surface': {
    title: 'Menu Surface',
    description: 'The MDC Menu Surface component is a reusable surface that appears above the content of the page and can be positioned adjacent to an element.',
    references: [{
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/menu-surface\'));',
    sass: `@use '@material/menu-surface/mdc-menu-surface';
@use '@material/menu-surface';`
  },
  'radio': {
    title: 'Radio Buttons',
    description: 'Radio buttons allow the user to select one option from a set while seeing all available options.',
    references: [{
      name: 'Material Design guidelines: Radio Buttons',
      url: 'https://material.io/design/components/selection-controls.html#radio-buttons'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-radio/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-radio/README.md#style-customization' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/radio\'));',
    sass: `@use '@material/radio/mdc-radio';
@use '@material/radio';
@use '@material/form-field/mdc-form-field';`
  },
  'ripple': {
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
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/ripple\'));',
    sass: `@use '@material/ripple/mdc-ripple';
@use '@material/ripple';`
  },
  'select': {
    title: 'Select Menus',
    description: 'MDC Select provides Material Design single-option select menus, using the MDC menu.',
    references: [{
      name: 'Material Design guidelines: Menus',
      url: 'https://material.io/guidelines/components/menus.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/README.md#sass-mixins' },
      { name: 'Helper Text Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/helper-text/README.md#sass-mixins' },
      { name: 'Icon Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/icon/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/select\'));',
    sass: `@use '@material/select/mdc-select';
@use '@material/select/_index' as select;
@use '@material/list/mdc-list';
@use '@material/menu-surface/mdc-menu-surface';
@use '@material/menu/mdc-menu';`
  },
  'slider': {
    title: 'Slider',
    description: 'Sliders allow users to make selections from a range of values.',
    references: [{
      name: 'Material Design guidelines: Sliders',
      url: 'https://material.io/guidelines/components/sliders.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-slider/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-slider/README.md#theming' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/slider\'));',
    sass: `@use '@material/slider/mdc-slider';
@use '@material/slider';`
  },
  'snackbar': {
    title: 'Snackbars',
    description: 'Snackbars provide brief messages about app processes at the bottom of the screen.',
    references: [{
      name: 'Material Design guidelines: Snackbars',
      url: 'https://material.io/design/components/snackbars.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/snackbar\'))',
    sass: `@use '@material/snackbar/mdc-snackbar';
@use '@material/snackbar';`
  },
  'switch': {
    title: 'Switches',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.',
    references: [{
      name: 'Material Design guidelines: Switches',
      url: 'https://material.io/design/components/selection-controls.html#switches'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-switch/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-switch/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/switch\'));',
    sass: `@use '@material/switch/mdc-switch';
@use '@material/switch';`
  },
  'tabs': {
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
      { name: 'Tab Bar Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md#sass-mixins' },
      { name: 'Scroller Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md#sass-mixins' },
      { name: 'Tab Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md#sass-mixins' },
      { name: 'Indicator Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md#sass-mixins' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/tab-bar\'));',
    sass: `@use '@material/tab-bar/mdc-tab-bar';
@use '@material/tab-bar';
@use '@material/tab-scroller/mdc-tab-scroller';
@use '@material/tab-scroller';
@use '@material/tab-indicator/mdc-tab-indicator';
@use '@material/tab-indicator';
@use '@material/tab/mdc-tab';
@use '@material/tab';`
  },
  'text-field': {
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
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/text-field\'));',
    sass: `@use "@material/textfield/mdc-text-field";
@use "@material/textfield/_index" as textfield;
@use "@material/form-field/_index" as form-field;
@use "@aurelia-mdc-web/text-field" as AuTextField;`
  },
  'top-app-bar': {
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
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/top-app-bar\'));',
    sass: `@use '@material/top-app-bar/mdc-top-app-bar';
@use '@material/top-app-bar';
@use '@material/icon-button/mdc-icon-button';`
  },
  'tree-view': {
    title: 'Tree View',
    description: 'The tree view provides a Material Design styled tree that can be used to display hierarchy data.',
    references: [],
    mdcUrls: [],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/tree-view\'));',
    sass: '@use "@aurelia-mdc-web/tree-view";'
  },
  'typography': {
    title: 'Typography',
    description: 'Use typography to present your design and content as clearly and efficiently as possible.',
    references: [{
      name: 'Material Design guidelines: Typography',
      url: 'https://material.io/design/typography/#type-scale'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-typography/README.md'
    }],
    mdcUrls: [
      { name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-typography/README.md#style-customization' },
    ],
    code: 'aurelia.use.plugin(PLATFORM.moduleName(\'@aurelia-mdc-web/typography\'));',
    sass: `@use '@material/typography/mdc-typography';
@use '@material/typography';`
  }
};
