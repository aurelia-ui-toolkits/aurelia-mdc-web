import basicHtml from './basic/basic.html?raw';
import customHtml from './custom/custom.html?raw';
import customScss from './custom/custom.scss?raw';
import themeHtml from './theme/theme.html?raw';
import themeScss from './theme/theme.scss?raw';

import { Basic } from './basic/basic';
import { Custom } from './custom/custom';
import { Theme } from './theme/theme';

export class SwitchExamples {
  basicHtml = basicHtml;
  customHtml = customHtml;
  customScss = customScss;
  themeHtml = themeHtml;
  themeScss = themeScss;

  basic = Basic;
  custom = Custom;
  theme = Theme;
}
