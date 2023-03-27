import multipleHtml from '!!raw-loader!./multiple/multiple.html';
import multipleCode from '!!raw-loader!./multiple/multiple';
import singleHtml from '!!raw-loader!./single/single.html';
import singleCode from '!!raw-loader!./single/single';
import { route } from '@aurelia/router';

import { Multiple } from './multiple/multiple';
import { Single } from './single/single';

@route({ path: 'examples' })
export class SegmentedButtonExamples {
  multiple = Multiple;
  single = Single;

  multipleHtml = multipleHtml;
  multipleCode = multipleCode;
  singleHtml = singleHtml;
  singleCode = singleCode;
}

