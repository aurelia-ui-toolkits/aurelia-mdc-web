import basicHtml from '!!raw-loader!./basic/basic.html?raw';
import positionsHtml from '!!raw-loader!./positions/positions.html?raw';

import { Basic } from './basic/basic';
import { Positions } from './positions/positions';

export class TooltipExamples {
  basicHtml = basicHtml;
  positionsHtml = positionsHtml;

  basic = Basic;
  positions = Positions;
}
