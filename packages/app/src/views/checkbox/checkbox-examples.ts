import defaultHtml from '!!raw-loader!./default/default.html';
import indeterminateHtml from '!!raw-loader!./indeterminate/indeterminate.html';
import labelHtml from '!!raw-loader!./label/label.html';
import themeHtml from '!!raw-loader!./theme/theme.html';
import themeSass from '!!raw-loader!./theme/theme.scss';

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
