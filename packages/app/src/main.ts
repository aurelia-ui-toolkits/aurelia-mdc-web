import { DebugConfiguration } from '@aurelia/debug';
import Aurelia, { RouterConfiguration, StyleConfiguration } from 'aurelia';
import { AppRoot } from './views/app-root/app-root';
import { AllConfiguration as MaterialConfiguration } from '@aurelia-mdc-web/all';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
import shared from './styles/shared.scss';
import { Home } from './views/home/home';
import { Gettingstarted } from './views/gettingstarted/gettingstarted';
import { DemoHljs } from './elements/demo-hljs/demo-hljs';
import { Button } from './views/button/button';

Aurelia
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  .register(DebugConfiguration, RouterConfiguration, MaterialConfiguration,
    Home, Gettingstarted, DemoHljs, Button)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(AppRoot)
  .start();
