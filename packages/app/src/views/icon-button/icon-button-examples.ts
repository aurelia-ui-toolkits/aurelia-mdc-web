import densityHtml from '!!raw-loader!./density/density.html';
import densitySass from '!!raw-loader!./density/density.scss';
import themeHtml from '!!raw-loader!./theme/theme.html';
import themeSass from '!!raw-loader!./theme/theme.scss';
import toggleHtml from '!!raw-loader!./toggle/toggle.html';
import buttonHtml from '!!raw-loader!./button/button.html';

import { Density } from './density/density';
import { Theme } from './theme/theme';
import { Toggle } from './toggle/toggle';
import { Button } from './button/button';

export class IconButtonExamples {
  densityHtml = densityHtml;
  densitySass = densitySass;
  themeHtml = themeHtml;
  themeSass = themeSass;
  toggleHtml = toggleHtml;
  buttonHtml = buttonHtml;
  density = Density;
  theme = Theme;
  toggle = Toggle;
  button = Button;
}
