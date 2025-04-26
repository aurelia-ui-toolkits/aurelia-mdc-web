import themeHtml from './theme/theme.html?raw';
import themeSass from './theme/theme.scss?raw';
import customHtml from './custom/custom.html?raw';
import customSass from './custom/custom.scss?raw';
import extendedHtml from './extended/extended.html?raw';
import extendedSass from './extended/extended.scss?raw';
import shapedHtml from './shaped/shaped.html?raw';
import shapedSass from './shaped/shaped.scss?raw';
import accessibilityHtml from './accessibility/accessibility.html?raw';
import animationHtml from './animation/animation.html?raw';
import miniHtml from './mini/mini.html?raw';
import defaultHtml from './default/default.html?raw';

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
