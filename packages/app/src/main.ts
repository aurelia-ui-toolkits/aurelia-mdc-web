import Aurelia, { RouterConfiguration, IRegistry } from 'aurelia';
import { StandardConfiguration, SVGAnalyzer } from '@aurelia/runtime-html';
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
import { ValidationHtmlConfiguration } from '@aurelia/validation-html';
import { ValidationConfiguration } from '@aurelia/validation';
import { MdcValidationControllerFactory } from '@aurelia-mdc-web/validation';
import { DefaultResources, HrefCustomAttribute } from '@aurelia/router';

// href is buggy
DefaultResources.splice(DefaultResources.findIndex(x => x === HrefCustomAttribute as unknown as IRegistry));

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))
  .register(StandardConfiguration, RouterConfiguration.customize({ useUrlFragmentHash: false, useHref: false }), MaterialConfiguration, SVGAnalyzer,
    Home, GettingStarted, Hljs, ApiViewer, ExampleViewer, JsonValueConverter,
    ValidationHtmlConfiguration.customize(o => o.ValidationControllerFactoryType = MdcValidationControllerFactory), ValidationConfiguration
  )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(Root)
  .start();
