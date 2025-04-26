import defaultHtml from './default/default.html?raw';
import indeterminateHtml from './indeterminate/indeterminate.html?raw';
import labelHtml from './label/label.html?raw';
import themeHtml from './theme/theme.html?raw';
import themeSass from './theme/theme.scss?raw';

import { Default } from './default/default';
import { Indeterminate } from './indeterminate/indeterminate';
import { Label } from './label/label';
import { Theme } from './theme/theme';

export class CheckboxExamples {
  defaultHtml = defaultHtml;
  indeterminateHtml = indeterminateHtml;
  labelHtml = labelHtml;
  themeHtml = themeHtml;
  themeSass = themeSass;

  default = Default;
  indeterminate = Indeterminate;
  label = Label;
  theme = Theme;
}
