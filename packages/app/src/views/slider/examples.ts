import continuousHtml from '!!raw-loader!./continuous.html';
import customRangeHtml from '!!raw-loader!./custom-range.html';
import discreteHtml from '!!raw-loader!./discrete.html';
import discreteTicksHtml from '!!raw-loader!./discrete-ticks.html';
import themeHtml from '!!raw-loader!./theme.html';
import themeScss from '!!raw-loader!./theme.scss';

export class Examples {
  continuousHtml = continuousHtml;
  customRangeHtml = customRangeHtml;
  discreteHtml = discreteHtml;
  discreteTicksHtml = discreteTicksHtml;
  themeHtml = themeHtml;
  themeScss = themeScss;

  continuousMin = 0;
  continuousMax = 100;
  continuousValue = 50;
  continuousDisabled = false;

  discreteMin = 0;
  discreteMax = 100;
  discreteValue = 50;
  discreteDisabled = false;

  dmMin = 0;
  dmMax = 100;
  dmStep = 5;
  dmValue = 50;
  dmDisabled = false;

  rangedValue = 500;
}
