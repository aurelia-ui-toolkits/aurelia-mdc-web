import dynamicHtml from '!!raw-loader!./dynamic/dynamic.html?raw';
import fadingIndicatorHtml from '!!raw-loader!./fading-indicator/fading-indicator.html?raw';
import fixedHtml from '!!raw-loader!./fixed/fixed.html?raw';
import iconIndicatorHtml from '!!raw-loader!./icon-indicator/icon-indicator.html?raw';
import iconIndicatorWithLabelHtml from '!!raw-loader!./icon-indicator-with-label/icon-indicator-with-label.html?raw';
import iconWithLabelHtml from '!!raw-loader!./icon-with-label/icon-with-label.html?raw';
import noInitialSelectionHtml from '!!raw-loader!./no-initial-selection/no-initial-selection.html?raw';
import noLabelsHtml from '!!raw-loader!./no-labels/no-labels.html?raw';
import scrollingHtml from '!!raw-loader!./scrolling/scrolling.html?raw';
import stackedHtml from '!!raw-loader!./stacked/stacked.html?raw';

import { Dynamic } from './dynamic/dynamic';
import { FadingIndicator } from './fading-indicator/fading-indicator';
import { Fixed } from './fixed/fixed';
import { IconIndicator } from './icon-indicator/icon-indicator';
import { IconIndicatorWithLabel } from './icon-indicator-with-label/icon-indicator-with-label';
import { IconWithLabel } from './icon-with-label/icon-with-label';
import { NoInitialSelection } from './no-initial-selection/no-initial-selection';
import { NoLabels } from './no-labels/no-labels';
import { Scrolling } from './scrolling/scrolling';
import { Stacked } from './stacked/stacked';

export class TabsExamples {
  dynamicHtml = dynamicHtml;
  fadingIndicatorHtml = fadingIndicatorHtml;
  fixedHtml = fixedHtml;
  iconIndicatorHtml = iconIndicatorHtml;
  iconIndicatorWithLabelHtml = iconIndicatorWithLabelHtml;
  iconWithLabelHtml = iconWithLabelHtml;
  noInitialSelectionHtml = noInitialSelectionHtml;
  noLabelsHtml = noLabelsHtml;
  scrollingHtml = scrollingHtml;
  stackedHtml = stackedHtml;

  dynamic = Dynamic;
  fadingIndicator = FadingIndicator;
  fixed = Fixed;
  iconIndicator = IconIndicator;
  iconIndicatorWithLabel = IconIndicatorWithLabel;
  iconWithLabel = IconWithLabel;
  noInitialSelection = NoInitialSelection;
  noLabels = NoLabels;
  scrolling = Scrolling;
  stacked = Stacked;
}
