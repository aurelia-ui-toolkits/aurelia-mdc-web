import { DebugConfiguration } from '@aurelia/debug';
import Aurelia, { RouterConfiguration } from 'aurelia';
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
import { Examples as ButtonExamples } from './views/button/examples';
import { ApiViewer } from './views/api-viewer/api-viewer';
import { ExampleViewer } from './elements/example-viewer/example-viewer';

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))
  .register(DebugConfiguration, RouterConfiguration, MaterialConfiguration,
    Home, GettingStarted, Hljs, Button, ButtonExamples, ApiViewer, ExampleViewer)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Root)
  .start();
