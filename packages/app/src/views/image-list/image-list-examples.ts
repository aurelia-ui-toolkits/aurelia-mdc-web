import standardHtml from './standard/standard.html?raw';
import standardSass from './standard/standard.scss?raw';
import masonryHtml from './masonry/masonry.html?raw';

import { Standard } from './standard/standard';
import { Masonry } from './masonry/masonry';

export class ImageListExamples {
  standardHtml = standardHtml;
  standardSass = standardSass;
  masonryHtml = masonryHtml;

  standard = Standard;
  masonry = Masonry;
}
