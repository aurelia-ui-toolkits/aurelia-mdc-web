import continuousHtml from './continuous/continuous.html?raw';
import customRangeHtml from './custom-range/custom-range.html?raw';
import discreteHtml from './discrete/discrete.html?raw';
import discreteTicksHtml from './discrete-ticks/discrete-ticks.html?raw';
import rangeHtml from './range/range.html?raw';
import themeHtml from './theme/theme.html?raw';
import themeScss from './theme/theme.scss?raw';

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
