import basicHtml from '!!raw-loader!./basic/basic.html';
import positionsHtml from '!!raw-loader!./positions/positions.html';

import { Basic } from './basic/basic';
import { Positions } from './positions/positions';

export class TooltipExamples {
  basicHtml = basicHtml;
  positionsHtml = positionsHtml;

  basic = Basic;
  positions = Positions;
}
