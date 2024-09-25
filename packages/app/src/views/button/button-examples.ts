import defaultHtml from '!!raw-loader!./default/default.html?raw';
import defaultSass from '!!raw-loader!./default/default.scss';
import densityHtml from '!!raw-loader!./density/density.html?raw';
import densitySass from '!!raw-loader!./density/density.scss';
import iconHtml from '!!raw-loader!./icon/icon.html?raw';
import iconSass from '!!raw-loader!./icon/icon.scss';
import svgHtml from '!!raw-loader!./svg-example/svg-example.html?raw';
import themeHtml from '!!raw-loader!./theme/theme.html?raw';
import themeSass from '!!raw-loader!./theme/theme.scss';
import shapedHtml from '!!raw-loader!./shaped/shaped.html?raw';
import shapedSass from '!!raw-loader!./shaped/shaped.scss';
import trailingHtml from '!!raw-loader!./trailing/trailing.html?raw';
import trailingSass from '!!raw-loader!./trailing/trailing.scss';
import accessibilityHtml from '!!raw-loader!./accessibility/accessibility.html?raw';

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
