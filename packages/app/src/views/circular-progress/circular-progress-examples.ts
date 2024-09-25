import indeterminateHtml from '!!raw-loader!./indeterminate/indeterminate.html?raw';
import determinateHtml from '!!raw-loader!./determinate/determinate.html?raw';
import sizeStrokeHtml from '!!raw-loader!./size-stroke/size-stroke.html?raw';

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
