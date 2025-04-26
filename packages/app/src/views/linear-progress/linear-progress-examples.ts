import indeterminateHtml from './indeterminate/indeterminate.html?raw';
import indeterminateSass from './indeterminate/indeterminate.scss?raw';
import determinateHtml from './determinate/determinate.html?raw';
import determinateSass from './determinate/determinate.scss?raw';

import {Indeterminate} from './indeterminate/indeterminate';
import {Determinate} from './determinate/determinate';

export class LinearProgressExamples {
  indeterminateHtml = indeterminateHtml;
  determinateHtml = determinateHtml;
  indeterminateSass = indeterminateSass;
  determinateSass = determinateSass;

  indeterminate = Indeterminate;
  determinate = Determinate;
}
