import continuousHtml from '!!raw-loader!./continuous/continuous.html';
import customRangeHtml from '!!raw-loader!./custom-range/custom-range.html';
import discreteHtml from '!!raw-loader!./discrete/discrete.html';
import discreteTicksHtml from '!!raw-loader!./discrete-ticks/discrete-ticks.html';
import rangeHtml from '!!raw-loader!./range/range.html';
import themeHtml from '!!raw-loader!./theme/theme.html';
import themeScss from '!!raw-loader!./theme/theme.scss';

import { Continuous } from './continuous/continuous';
import { CustomRange } from './custom-range/custom-range';
import { Discrete } from './discrete/discrete';
import { DiscreteTicks } from './discrete-ticks/discrete-ticks';
import { Range } from './range/range';
import { Theme } from './theme/theme';

export class SliderExamples {
  continuousHtml = continuousHtml;
  customRangeHtml = customRangeHtml;
  discreteHtml = discreteHtml;
  discreteTicksHtml = discreteTicksHtml;
  rangeHtml = rangeHtml;
  themeHtml = themeHtml;
  themeScss = themeScss;

  continuous = Continuous;
  customRange = CustomRange;
  discrete = Discrete;
  discreteTicks = DiscreteTicks;
  range = Range;
  theme = Theme;
}
