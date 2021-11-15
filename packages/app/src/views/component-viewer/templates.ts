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
  'button-page': {
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
    code: `import { ButtonConfiguration } from '@aurelia-web-mdc/button';
Aurelia.register(ButtonConfiguration).app(component).start();`,
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
    code: `import { CardConfiguration } from '@aurelia-web-mdc/card';
Aurelia.register(CardConfiguration).app(component).start();`,
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
    code: `import { CheckboxConfiguration } from '@aurelia-web-mdc/checkbox';
Aurelia.register(CheckboxConfiguration).app(component).start();`,
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
    code: `import { ChipsConfiguration } from '@aurelia-web-mdc/chips';
Aurelia.register(ChipsConfiguration).app(component).start();`,
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
    code: `import { CircularProgressConfiguration } from '@aurelia-web-mdc/circular-progress';
Aurelia.register(CircularProgressConfiguration).app(component).start();`,
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
    code: `import { DataTableConfiguration } from '@aurelia-web-mdc/data-table';
Aurelia.register(DataTableConfiguration).app(component).start();`,
    sass: `@use '@material/data-table/mdc-data-table';
@use '@material/data-table';`
  },
  'dialog-page': {
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
    code: `import { DialogConfiguration } from '@aurelia-web-mdc/dialog';
Aurelia.register(DialogConfiguration).app(component).start();`,
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
    code: `import { DrawerConfiguration } from '@aurelia-web-mdc/drawer';
Aurelia.register(DrawerConfiguration).app(component).start();`,
    sass: '@use "@material/drawer/mdc-drawer";'
  },
  'expandable': {
    title: 'Expandable',
    description: 'Expandable provides an expandable details-summary view.',
    references: [],
    mdcUrls: [],
    code: `import { ExpandableConfiguration } from '@aurelia-web-mdc/expandable';
Aurelia.register(ExpandableConfiguration).app(component).start();`,
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
    code: `import { ElevationConfiguration } from '@aurelia-web-mdc/elevation';
    Aurelia.register(ElevationConfiguration).app(component).start();`,
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
    code: `import { FabConfiguration } from '@aurelia-web-mdc/fab';
Aurelia.register(FabConfiguration).app(component).start();`,
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
    code: `import { FormFieldConfiguration } from '@aurelia-web-mdc/form-field';
Aurelia.register(FormFieldConfiguration).app(component).start();`,
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
    code: `import { IconButtonConfiguration } from '@aurelia-web-mdc/icon-button';
Aurelia.register(IconButtonConfiguration).app(component).start();`,
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
    code: `import { ImageListConfiguration } from '@aurelia-web-mdc/image-list';
Aurelia.register(ImageListConfiguration).app(component).start();`,
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
    code: `import { LayoutGridConfiguration } from '@aurelia-web-mdc/layout-grid';
Aurelia.register(LayoutGridConfiguration).app(component).start();`,
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
    code: `import { ListConfiguration } from '@aurelia-web-mdc/list';
Aurelia.register(ListConfiguration).app(component).start();`,
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
    code: `import { LinearProgressConfiguration } from '@aurelia-web-mdc/linear-progress';
Aurelia.register(LinearProgressConfiguration).app(component).start();`,
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
    code: `import { LookupConfiguration } from '@aurelia-web-mdc/lookup';
Aurelia.register(LookupConfiguration).app(component).start();`,
    sass: `@use '@material/menu/mdc-menu';
@use '@material/menu';
@use '@material/list/mdc-list';
@use '@material/menu-surface/mdc-menu-surface';`
  },
  'menu-page': {
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
    code: `import { MenuConfiguration } from '@aurelia-web-mdc/menu';
Aurelia.register(MenuConfiguration).app(component).start();`,
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
    code: `import { MenuSurfaceConfiguration } from '@aurelia-web-mdc/menu-surface';
Aurelia.register(MenuSurfaceConfiguration).app(component).start();`,
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
    code: `import { RadioConfiguration } from '@aurelia-web-mdc/radio';
Aurelia.register(RadioConfiguration).app(component).start();`,
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
    code: `import { RippleConfiguration } from '@aurelia-web-mdc/ripple';
Aurelia.register(RippleConfiguration).app(component).start();`,
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
    code: `import { SelectConfiguration } from '@aurelia-web-mdc/select';
Aurelia.register(SelectConfiguration).app(component).start();`,
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
    code: `import { SliderConfiguration } from '@aurelia-web-mdc/slider';
Aurelia.register(SliderConfiguration).app(component).start();`,
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
    code: `import { SnackbarConfiguration } from '@aurelia-web-mdc/snackbar';
    Aurelia.register(SnackbarConfiguration).app(component).start();`,
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
    code: `import { SwitchConfiguration } from '@aurelia-web-mdc/switch';
Aurelia.register(SwitchConfiguration).app(component).start();`,
    sass: '@use "@material/switch/styles";'
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
    code: `import { TabBarConfiguration } from '@aurelia-web-mdc/tab-bar';
Aurelia.register(TabBarConfiguration).app(component).start();`,
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
    code: `import { TextFieldConfiguration } from '@aurelia-web-mdc/text-field';
Aurelia.register(TextFieldConfiguration).app(component).start();`,
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
    code: `import { TopAppBarConfiguration } from '@aurelia-web-mdc/top-app-bar';
Aurelia.register(TopAppBarConfiguration).app(component).start();`,
    sass: `@use '@material/top-app-bar/mdc-top-app-bar';
@use '@material/top-app-bar';
@use '@material/icon-button/mdc-icon-button';`
  },
  'tree-view': {
    title: 'Tree View',
    description: 'The tree view provides a Material Design styled tree that can be used to display hierarchy data.',
    references: [],
    mdcUrls: [],
    code: `import { TreeViewConfiguration } from '@aurelia-web-mdc/tree-view';
Aurelia.register(TreeViewConfiguration).app(component).start();`,
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
    code: `import { TypographyConfiguration } from '@aurelia-web-mdc/typography';
Aurelia.register(TypographyConfiguration).app(component).start();`,
    sass: `@use '@material/typography/mdc-typography';
@use '@material/typography';`
  }
};
