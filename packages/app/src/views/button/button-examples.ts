import defaultHtml from './default/default.html?raw';
import defaultSass from './default/default.scss?raw';
import densityHtml from './density/density.html?raw';
import densitySass from './density/density.scss?raw';
import iconHtml from './icon/icon.html?raw';
import iconSass from './icon/icon.scss?raw';
import svgHtml from './svg-example/svg-example.html?raw';
import themeHtml from './theme/theme.html?raw';
import themeSass from './theme/theme.scss?raw';
import shapedHtml from './shaped/shaped.html?raw';
import shapedSass from './shaped/shaped.scss?raw';
import trailingHtml from './trailing/trailing.html?raw';
import trailingSass from './trailing/trailing.scss?raw';
import accessibilityHtml from './accessibility/accessibility.html?raw';

import { Default } from './default/default';
import { Density } from './density/density';
import { Icon } from './icon/icon';
import { Accessibility } from './accessibility/accessibility';
import { Theme } from './theme/theme';
import { Trailing } from './trailing/trailing';
import { SvgExample } from './svg-example/svg-example';
import { Shaped } from './shaped/shaped';
import { route } from '@aurelia/router';

@route({ path: 'examples' })
export class ButtonExamples {
  accessibility = Accessibility;
  default = Default;
  density = Density;
  icon = Icon;
  shaped = Shaped;
  svgExample = SvgExample;
  theme = Theme;
  trailing = Trailing;

  defaultHtml = defaultHtml;
  defaultSass = defaultSass;

  densityHtml = densityHtml;
  densitySass = densitySass;

  iconHtml = iconHtml;
  iconSass = iconSass;

  svgHtml = svgHtml;

  themeHtml = themeHtml;
  themeSass = themeSass;

  shapedHtml = shapedHtml;
  shapedSass = shapedSass;

  trailingHtml = trailingHtml;
  trailingSass = trailingSass;

  accessibilityHtml = accessibilityHtml;
}
