import indeterminateHtml from './indeterminate/indeterminate.html?raw';
import determinateHtml from './determinate/determinate.html?raw';
import sizeStrokeHtml from './size-stroke/size-stroke.html?raw';

import { Determinate } from './determinate/determinate';
import { Indeterminate } from './indeterminate/indeterminate';
import { SizeStroke } from './size-stroke/size-stroke';

export class CircularProgressExamples {
  indeterminateHtml = indeterminateHtml;
  determinateHtml = determinateHtml;
  sizeStrokeHtml = sizeStrokeHtml;
  determinate = Determinate;
  indeterminate = Indeterminate;
  sizeStroke = SizeStroke;
}
