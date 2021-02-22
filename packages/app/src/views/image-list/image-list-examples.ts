import standardHtml from '!!raw-loader!./standard/standard.html';
import standardSass from '!!raw-loader!./standard/standard.scss';
import masonryHtml from '!!raw-loader!./masonry/masonry.html';

import { Standard } from './standard/standard';
import { Masonry } from './masonry/masonry';

export class ImageListExamples {
  standardHtml = standardHtml;
  standardSass = standardSass;
  masonryHtml = masonryHtml;

  standard = Standard;
  masonry = Masonry;
}
