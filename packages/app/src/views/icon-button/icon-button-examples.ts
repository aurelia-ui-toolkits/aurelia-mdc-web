import densityHtml from './density/density.html?raw';
import densitySass from './density/density.scss?raw';
import themeHtml from './theme/theme.html?raw';
import themeSass from './theme/theme.scss?raw';
import toggleHtml from './toggle/toggle.html?raw';
import buttonHtml from './button/button.html?raw';

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
