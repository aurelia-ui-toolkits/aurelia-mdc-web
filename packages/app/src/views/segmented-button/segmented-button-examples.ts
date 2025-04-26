import multipleHtml from './multiple/multiple.html?raw';
import multipleCode from './multiple/multiple.ts?raw';
import singleHtml from './single/single.html?raw';
import singleCode from './single/single.ts?raw';
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

