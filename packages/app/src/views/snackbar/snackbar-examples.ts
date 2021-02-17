import basicHtml from '!!raw-loader!./basic/basic.html';
import basicCode from '!!raw-loader!./basic/basic';
import customHtml from '!!raw-loader!./custom/custom.html';
import customSass from '!!raw-loader!./custom/custom.scss';
import customCode from '!!raw-loader!./custom/custom';
import themeHtml from '!!raw-loader!./theme/theme.html';
import themeSass from '!!raw-loader!./theme/theme.scss';
import themeCode from '!!raw-loader!./theme/theme';

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
