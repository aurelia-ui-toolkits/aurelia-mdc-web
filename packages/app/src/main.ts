import Aurelia, { RouterConfiguration, } from 'aurelia';
import { StandardConfiguration } from '@aurelia/runtime-html';
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
import { ApiViewer } from './views/api-viewer/api-viewer';
import { ExampleViewer } from './elements/example-viewer/example-viewer';
import { JsonValueConverter } from './converters/json';

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))
  .register(StandardConfiguration, RouterConfiguration.customize({ useUrlFragmentHash: false }), MaterialConfiguration, SvgConfiguration,
    Home, GettingStarted, Hljs, ApiViewer, ExampleViewer, JsonValueConverter
  )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Root)
  .start();
