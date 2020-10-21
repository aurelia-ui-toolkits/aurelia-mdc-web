import indeterminateHtml from '!!raw-loader!./indeterminate.html';
import determinateHtml from '!!raw-loader!./determinate.html';
import sizeStrokeHtml from '!!raw-loader!./size-stroke.html';

import * as determinate from './determinate.html';
import * as indeterminate from './indeterminate.html';
import * as sizeStroke from './size-stroke.html';

export class CircularProgressExamples {
  indeterminateHtml = indeterminateHtml;
  determinateHtml = determinateHtml;
  sizeStrokeHtml = sizeStrokeHtml;
  determinate = determinate;
  indeterminate = indeterminate;
  sizeStroke = sizeStroke;

  progress = 0.75;

  size = 50;
  stroke = 5;
}
