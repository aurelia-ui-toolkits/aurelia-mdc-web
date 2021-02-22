import themeHtml from '!!raw-loader!./theme/theme.html';
import themeSass from '!!raw-loader!./theme/theme.scss';
import customHtml from '!!raw-loader!./custom/custom.html';
import customSass from '!!raw-loader!./custom/custom.scss';
import extendedHtml from '!!raw-loader!./extended/extended.html';
import extendedSass from '!!raw-loader!./extended/extended.scss';
import shapedHtml from '!!raw-loader!./shaped/shaped.html';
import shapedSass from '!!raw-loader!./shaped/shaped.scss';
import accessibilityHtml from '!!raw-loader!./accessibility/accessibility.html';
import animationHtml from '!!raw-loader!./animation/animation.html';
import miniHtml from '!!raw-loader!./mini/mini.html';
import defaultHtml from '!!raw-loader!./default/default.html';

import { Theme } from './theme/theme';
import { Custom } from './custom/custom';
import { Extended } from './extended/extended';
import { Shaped } from './shaped/shaped';
import { Accessibility } from './accessibility/accessibility';
import { Animation } from './animation/animation';
import { Mini } from './mini/mini';
import { Default } from './default/default';

export class FabExamples {
  themeHtml = themeHtml;
  themeSass = themeSass;
  customHtml = customHtml;
  customSass = customSass;
  extendedHtml = extendedHtml;
  extendedSass = extendedSass;
  shapedHtml = shapedHtml;
  shapedSass = shapedSass;
  accessibilityHtml = accessibilityHtml;
  animationHtml = animationHtml;
  miniHtml = miniHtml;
  defaultHtml = defaultHtml;

  theme = Theme;
  custom = Custom;
  extended = Extended;
  shaped = Shaped;
  accessibility = Accessibility;
  animation = Animation;
  mini = Mini;
  default = Default;
}
