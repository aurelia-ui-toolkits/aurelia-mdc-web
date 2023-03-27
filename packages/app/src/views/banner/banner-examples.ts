import { route } from '@aurelia/router';
import inlineHtml from '!!raw-loader!./inline/inline.html';
import inlineCode from '!!raw-loader!./inline/inline';

import { Inline } from './inline/inline';

@route({ path: 'examples' })
export class BannerExamples {
  inline = Inline;

  inlineHtml = inlineHtml;
  inlineCode = inlineCode;
}
