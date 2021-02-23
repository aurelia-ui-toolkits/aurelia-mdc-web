import basicHtml from '!!raw-loader!./basic/basic.html';
import customHtml from '!!raw-loader!./custom/custom.html';
import customScss from '!!raw-loader!./custom/custom.scss';
import themeHtml from '!!raw-loader!./theme/theme.html';
import themeScss from '!!raw-loader!./theme/theme.scss';

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
