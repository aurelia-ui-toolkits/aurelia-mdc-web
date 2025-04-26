import { route } from '@aurelia/router';
import inlineHtml from './inline/inline.html?raw';
import inlineCode from './inline/inline.ts?raw';

import { Inline } from './inline/inline';

@route({ path: 'examples' })
export class BannerExamples {
  inline = Inline;

  inlineHtml = inlineHtml;
  inlineCode = inlineCode;
}
