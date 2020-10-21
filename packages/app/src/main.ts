import { DebugConfiguration } from '@aurelia/debug';
import Aurelia, { RouterConfiguration } from 'aurelia';
import * as SvgConfiguration from '@aurelia/plugin-svg';
import { Root } from './views/root/root';
import { AllConfiguration as MaterialConfiguration } from '@aurelia-mdc-web/all';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './styles/shared.scss';
import { Home } from './views/home/home';
import { GettingStarted } from './views/getting-started/getting-started';
import { Hljs } from './elements/hljs/hljs';
import { Button } from './views/button/button';
import { ButtonExamples } from './views/button/button-examples';
import { ApiViewer } from './views/api-viewer/api-viewer';
import { ExampleViewer } from './elements/example-viewer/example-viewer';
import { CircularProgress } from './views/circular-progress/circular-progress';
import { CircularProgressExamples } from './views/circular-progress/circular-progress-examples';
import { Drawer } from './views/drawer/drawer';
import { DrawerExamples } from './views/drawer/drawer-examples';
import { List } from './views/list/list';
import { ListExamples } from './views/list/list-examples';

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))
  .register(DebugConfiguration, RouterConfiguration, MaterialConfiguration, SvgConfiguration,
    Home, GettingStarted, Hljs, ApiViewer, ExampleViewer,
    Button, ButtonExamples,
    CircularProgress, CircularProgressExamples,
    Drawer, DrawerExamples,
    List, ListExamples
  )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Root)
  .start();
