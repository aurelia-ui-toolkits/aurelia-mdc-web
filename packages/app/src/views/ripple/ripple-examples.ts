import basicHtml from '!!raw-loader!./basic/basic.html';
import primaryHtml from '!!raw-loader!./primary/primary.html';
import accentHtml from '!!raw-loader!./accent/accent.html';

import { Basic } from './basic/basic';
import { Primary } from './primary/primary';
import { Accent } from './accent/accent';

export class RippleExamples {
  basicHtml = basicHtml;
  primaryHtml = primaryHtml;
  accentHtml = accentHtml;

  basic = Basic;
  primary = Primary;
  accent = Accent;
}
