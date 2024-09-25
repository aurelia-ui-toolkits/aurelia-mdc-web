import indeterminateHtml from '!!raw-loader!./indeterminate/indeterminate.html?raw';
import indeterminateSass from '!!raw-loader!./indeterminate/indeterminate.scss';
import determinateHtml from '!!raw-loader!./determinate/determinate.html?raw';
import determinateSass from '!!raw-loader!./determinate/determinate.scss';

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
