import basicHtml from './basic/basic.html?raw';
import basicCode from './basic/basic.ts?raw';
import customHtml from './custom/custom.html?raw';
import customSass from './custom/custom.scss?raw';
import customCode from './custom/custom.ts?raw';
import themeHtml from './theme/theme.html?raw';
import themeSass from './theme/theme.scss?raw';
import themeCode from './theme/theme.ts?raw';

import { Basic } from './basic/basic';
import { Custom } from './custom/custom';
import { Theme } from './theme/theme';

export class SnackbarExamples {
  basicHtml = basicHtml;
  basicCode = basicCode;
  customHtml = customHtml;
  customSass = customSass;
  customCode = customCode;
  themeHtml = themeHtml;
  themeSass = themeSass;
  themeCode = themeCode;

  basic = Basic;
  custom = Custom;
  theme = Theme;
}
